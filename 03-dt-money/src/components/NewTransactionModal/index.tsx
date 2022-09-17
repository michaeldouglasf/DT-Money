import * as Dialog from "@radix-ui/react-dialog";
import { Overlay,Content } from "./styles";

export function NewTransactionModal() {
  return (
    <Dialog.Portal>
      <Overlay />
      <Content>
        <Dialog.Title>Nova Transacao</Dialog.Title>
        <Dialog.Close />
        <form action="">
            <input type="text" placeholder="Descricao" required/>
            <input type="number" placeholder="Preco" required/>
            <input type="text" placeholder="Categoria" required/>
            <button type="reset">Cadastrar</button>
        </form>

      </Content>
    </Dialog.Portal>
  );
}
