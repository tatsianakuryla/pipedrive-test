### Pipedrive OAuth — ручная авторизация из терминала

Подходит для первичной проверки. Выполняйте **в системном терминале** (PowerShell / bash), а **не** в DevTools браузера.  
`redirect_uri` в шагах ниже должен **в точности совпадать** с тем, что указано в настройках приложения Pipedrive.

---

#### 1) Получить authorization code

1. В консоли Pipedrive укажите **Redirect URI**:  
   `https://pipedrive-test.netlify.app`
2. Откройте в браузере ссылку (подставьте свои значения):
```
https://oauth.pipedrive.com/oauth/authorize?client_id={CLIENT_ID}&redirect_uri={REDIRECT_URI}&response_type=code&state=xyz
```
3. После логина вы попадёте на страницу вида:  
   `{REDIRECT_URI}?code=...&state=...` — **скопируйте значение `code`** (далее — `{AUTH_CODE}`).

---

#### 2) Обменять code на токен

 - PowerShell (Windows)
```powershell
$headers = @{ "Content-Type" = "application/x-www-form-urlencoded" }
$body = "grant_type=authorization_code&code={AUTH_CODE}&redirect_uri={REDIRECT_URI}&client_id={CLIENT_ID}&client_secret={CLIENT_SECRET}"
irm -Method Post -Uri "https://oauth.pipedrive.com/oauth/token" -Headers $headers -Body $body
```

 - cURL (macOS/Linux/WSL)
```bash
curl -X POST https://oauth.pipedrive.com/oauth/token   -H "Content-Type: application/x-www-form-urlencoded"   -d "grant_type=authorization_code"   -d "code={AUTH_CODE}"   -d "redirect_uri={REDIRECT_URI}"   -d "client_id={CLIENT_ID}"   -d "client_secret={CLIENT_SECRET}"
```

В ответ придёт JSON с `access_token`, `refresh_token`, `expires_in`. Сохраните эти значения в надёжном месте.

---

#### 3) Обновить токен по refresh_token (когда истечёт)

 - PowerShell (Windows)
```powershell
$headers = @{ "Content-Type" = "application/x-www-form-urlencoded" }
$body = "grant_type=refresh_token&refresh_token={REFRESH_TOKEN}&client_id={CLIENT_ID}&client_secret={CLIENT_SECRET}"
irm -Method Post -Uri "https://oauth.pipedrive.com/oauth/token" -Headers $headers -Body $body
```

 - cURL (macOS/Linux/WSL)
```bash
curl -X POST https://oauth.pipedrive.com/oauth/token   -H "Content-Type: application/x-www-form-urlencoded"   -d "grant_type=refresh_token"   -d "refresh_token={REFRESH_TOKEN}"   -d "client_id={CLIENT_ID}"   -d "client_secret={CLIENT_SECRET}"
```

---

#### Примечания
- `{CLIENT_ID}` — из консоли Pipedrive; 
- `{CLIENT_SECRET}` — секрет (не публикуйте).
- `{AUTH_CODE}` — одноразовый и живёт недолго; если ошибка — получите новый (шаг 1).
- `redirect_uri` должен совпадать в настройках Pipedrive и в запросах.
