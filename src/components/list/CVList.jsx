import DateTimeTool from "../../libs/datetime";

export default function CVList({ cvs, onCVClick, onDeleteClick, onEditClick }) {
  return (
    <div >
      <table class="table ucp-table">
        <thead class="thead-s">
          <tr>
            <th class="text-center" scope="col">ID</th>
            <th>Poste</th>
            <th class="text-center" scope="col">Créé le</th>
            <th class="text-center" scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {cvs.map((item, index) => (
            <tr onClick={() => onCVClick(index)} key={item.id}>
              <td class="text-center">{item.id}</td>
              <td>{item.occupation}</td>
              <td>{DateTimeTool(item.createdAt).format("D/M/YY")}</td>
              <td class="text-center">
                <button onClick={() => onEditClick(item.id)} class="gray-s"><i class="uil uil-edit-alt"></i></button>
                <button onClick={() => onDeleteClick(item.id)} class="gray-s"><i class="uil uil-trash-alt"></i></button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
