import Modal from '../Modal'

export default function EventModal() {
   return (
      <Modal title="Agendamento">
         <form>
            <input type="text" placeholder="nome do cliente" name="nome_cliente" />
            <input type="text" placeholder="serviço" name="servico" />
            <input type="text" placeholder="funcionario" name="funcionario" />
            <input type="text" placeholder="duraçao" name="duracao" />
            <button type="submit">salvar</button>
         </form>
      </Modal>
   )
}
