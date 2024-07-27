import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../redux/store';
import { removeSolicitud } from '../redux/slices/formSlice';
import { styled } from 'styled-components';
import { Link } from 'react-router-dom';
import NavBar from './Nav';

const Container = styled.div`
  max-width: 100%;
  margin: 0 auto;
  padding: 20px;
font-family: "Barlow", sans-serif;
`;

const Nav = styled.nav`
  background-color: #007bff;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  margin: 0 10px;

  &:hover {
    text-decoration: underline;
  }
`;
const Subtitle = styled.h2`
  color: #333;
  margin-bottom: 10px;
`;


const Table = styled.table`
display: flex;
justify-content:center;
  border-collapse: collapse;
`;

const Th = styled.th`
  padding: 12px;
`;

const Td = styled.td`
  padding: 12px;
  border: 1px solid #ddd;
`;

const Button = styled.button`
  background-color: #ff4d4d;
  color: white;
  padding: 8px 12px;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #cc0000;
  }
`;

const FormList = () => {
  const solicitudes = useSelector((state: RootState) => state.form.solicitudes);
  const dispatch: AppDispatch = useDispatch();

  return (
    <Container>
        <NavBar/>
  <div>
  <Subtitle>Lista formulario</Subtitle>
  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the bed industry's standard dummy text ever since.</p>
      <Table>
        <thead>
          <tr>
            <Th>Nombre</Th>
            <Th>Rut vendedor</Th>
            <Th>Patente vehiculo</Th>
            <Th>Marca vehiculo</Th>
            <Th>Modelo vehiculo</Th>
            <Th>Color vehiculo</Th>
            <Th>Eliminar</Th>
          </tr>
        </thead>
        <tbody>
          {solicitudes.map((solicitud) => (
            <tr key={solicitud.id}>
              <Td>{solicitud.vendedor}</Td>
              <Td>{solicitud.rut}</Td>
              <Td>{solicitud.patente}</Td>
              <Td>{solicitud.marca}</Td>
              <Td>{solicitud.modelo}</Td>
              <Td>{solicitud.precio}</Td>
              <Td>
                <Button onClick={() => dispatch(removeSolicitud(solicitud.id))}>
                  <img src="../assets/Eliminar.png" alt="" />Eliminar
                </Button>
              </Td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
    </Container>
  
  );
};

export default FormList;