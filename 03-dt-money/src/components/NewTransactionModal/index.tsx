import * as Dialog from "@radix-ui/react-dialog";
import { X } from "phosphor-react";
import { Overlay,Content, CloseButton, TransactionType, TransactionTypeButton } from "./styles";
import { ArrowCircleUp, ArrowCircleDown } from 'phosphor-react'
import * as z from 'zod'
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

const newTransactionFormSchema = z.object({
  description: z.string(),
  price: z.number(),
  category: z.string(),
  // type: z.enum(['income', 'outcome']),
})

type NewTransactionFormInputs = z.infer<typeof newTransactionFormSchema>
export function NewTransactionModal() {
  
const {
  register,
   handleSubmit,
   formState:{isSubmitting}

  } = useForm<NewTransactionFormInputs>({
  resolver: zodResolver(newTransactionFormSchema)
})
 async function handleCreateNewTransaction(data:NewTransactionFormInputs){
  
  await new Promise(resolve =>setTimeout(resolve,2000))
  console.log(data)
 }
  return (
    <Dialog.Portal>
      <Overlay />

      <Content>
        <Dialog.Title>Nova Transacao</Dialog.Title>
        <CloseButton>
          <X size={24}/>
        </CloseButton>
        
        <form onSubmit={handleSubmit(handleCreateNewTransaction)}>
            <input 
            type="text" 
            placeholder="Descricao" 
            required
            {...register('description')}
            />
            <input 
            type="number" 
            placeholder="Preco" 
            required
            {...register('price',{valueAsNumber: true})}
            />
            <input 
            type="text" 
            placeholder="Categoria" 
            required
            {...register('category')}
            />


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
            <button className="button" type="submit" disabled={isSubmitting}>
              Cadastrar
            </button>
        </form>

      </Content>
    </Dialog.Portal>
  );
}
