import { HeaderContent, HeaderContiner, NewTransctionButton } from "./styles";
import logoimg from "../../assets/logo.svg";
import * as Dialog from "@radix-ui/react-dialog";
import { NewTransactionModal } from "../NewTransactionModal";

export function Header() {
  return (
    <HeaderContiner>
      <HeaderContent>
        <img src={logoimg} />
        <Dialog.Root>
        <Dialog.Trigger asChild >
          <NewTransctionButton>Nova Transacao</NewTransctionButton>
        </Dialog.Trigger>
        
        <NewTransactionModal/>

        </Dialog.Root>
      </HeaderContent>
    </HeaderContiner>
  );
}
