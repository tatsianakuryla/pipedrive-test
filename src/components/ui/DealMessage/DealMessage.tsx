import type {DealMessageProperties} from "../../../types.ts";

export const DealMessage = ({ dealUrl }: DealMessageProperties) => {
  return dealUrl ? (
      <div className="message">
        <h2>The deal has been successfully created.</h2>
        <a href={dealUrl} target="_blank">
          You can now view it in Pipedrive.
        </a>
      </div>
    ) : <div className="message">
      The deal was not created. Try again.
    </div>

}