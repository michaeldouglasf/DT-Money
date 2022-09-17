import * as Dialog from "@radix-ui/react-dialog";
import { X } from "phosphor-react";
import { Overlay,Content, CloseButton, TransactionType, TransactionTypeButton } from "./styles";
import { ArrowCircleUp, ArrowCircleDown } from 'phosphor-react'
export function NewTransactionModal() {
  return (
    <Dialog.Portal>
      <Overlay />

      <Content>
        <Dialog.Title>Nova Transacao</Dialog.Title>
        <CloseButton>
          <X size={24}/>
        </CloseButton>
        
        <form action="">
            <input type="text" placeholder="Descricao" required/>
            <input type="number" placeholder="Preco" required/>
            <input type="text" placeholder="Categoria" required/>


            <TransactionType>
              <TransactionTypeButton variant="income" value="income">
                Entrada
                <ArrowCircleUp size={24} />
              </TransactionTypeButton>
              <TransactionTypeButton variant="outcome" value="outcome">
                Saida
                <ArrowCircleDown size={24}/>
              </TransactionTypeButton>
            </TransactionType>
            <button className="button" type="submit">
              Cadastrar
            </button>
        </form>

      </Content>
    </Dialog.Portal>
  );
}
