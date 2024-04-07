import { FuncionarioViewModel } from '@/domain/models/FuncionarioViewModel';
import { faEdit, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as React from 'react';
import './FuncionarioIndex.css';

export interface Props {

}

const FuncionarioIndex = (props: Props) => {
  const [selected, setSelected] = React.useState<FuncionarioViewModel>(null);

  return ( 
    <div className="g-0">
      <div className="col-12 p-2 crud-bar">
        <button className='btn btn-primary p-2 mx-2'><FontAwesomeIcon icon={faPlus}/>&nbsp;Novo</button>
        <button className='btn btn-secondary p-2'><FontAwesomeIcon icon={faEdit}/>&nbsp;Editar</button>
      </div>
    </div>
   );
}
 
export default FuncionarioIndex;