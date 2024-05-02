import PageHeader from '../../components/PageHeader';

import Input from '../../components/Input';
import Select from '../../components/Select';

export default function EditContact() {
  return (
    <>
      <PageHeader title="Editar contato" />
      <Input type="text" placeholder="Nome" />
      <Select>
        <option value="1">Instagram</option>
        <option value="1">Facebook</option>
        <option value="1">Linkedin</option>
        <option value="1">WhatsApp</option>
      </Select>
    </>
  );
}
