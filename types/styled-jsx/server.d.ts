import { ReactElement } from "react";

declare function flushToHTML(): string;
declare function flushToReact<T>(opts?: {
  nonce?: string;
}): Array<ReactElement<T>>;

export { flushToHTML };
export default flushToReact;
