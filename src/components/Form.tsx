import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { addSolicitud } from '../redux/slices/formSlice';
import { AppDispatch } from '../redux/store';

import formularioImg from '../assets/Laptop.png';
import NavBar from './Nav';

const sharedStyles = css`
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

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

const Logo = styled.div`
  color: white;
  font-size: 1.5rem;
  font-weight: bold;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between; 
  text-align: center;
  margin: 0 5% 0 5%;
  border-bottom: 1px solid black;
`;

const Title = styled.h1`
display:flex;
align-items:center;  
color: #0000ff;
font-size: 56px;

`;

const TitleA = styled.span`
font-size: 56px;
font-weight: 400;
margin-right: 10px;
`

const Image = styled.img`
  max-width: 40%;
  height: auto;
  margin-bottom: 20px;
`;

const Subtitle = styled.h2`
  color: #333;
  margin-bottom: 10px;
`;

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const TitleForm = styled.h2`
color: #333;
  margin-bottom: 10px;
  font-size: 20px 
`

const Label = styled.label`
  display: block;
  font-weight: bold;
  margin-bottom: 5px;
`;

const FieldContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin-right: 10px;

  &:last-child {
    margin-right: 0;
  }
`;

const CustomTextField = styled.input`
  ${sharedStyles}
  flex: 1;
`;

const CustomSelect = styled.select`
  ${sharedStyles}
  flex: 1;
`;

const Button = styled.button`
display: flex;
justify-content:flex-end;
  background-color: #007bff;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const Form = () => {
  const dispatch: AppDispatch = useDispatch();
  const [formData, setFormData] = useState({
    vendedor: '',
    rut: '',
    marca: '',
    modelo: '',
    patente: '',
    precio: '',
    fecha: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newSolicitud = {
      ...formData,
      id: Date.now(),
      precio: parseFloat(formData.precio),
    };
    dispatch(addSolicitud(newSolicitud));
  };

  return (
    <Container>
      <NavBar/>
    <Header>
      <Title><TitleA>Formulario</TitleA> de Prueba</Title>
      <Image src={formularioImg} alt="Formulario" />
    </Header>
    <FormWrapper>
      <form onSubmit={handleSubmit}>
      <Subtitle>Nuevo formulario</Subtitle>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the bed industry's standard dummy text ever since.</p>
       <div>
        <TitleForm>Datos Vendedor</TitleForm>
       </div>
        <Section>
        <FieldContainer>
        <Label>Nombre completo:</Label>
        <CustomTextField name="vendedor" placeholder="Nombre completo" value={formData.vendedor} onChange={handleChange} />
        </FieldContainer>
        <FieldContainer>
        <Label>Rut Vendedor:</Label>
        <CustomTextField name="vendedor" placeholder="Nombre completo" value={formData.rut} onChange={handleChange} />
        </FieldContainer>
        </Section>
        <TitleForm>Datos del vehiculo</TitleForm>
        <Section>
        <FieldContainer>
        <Label>Patente del vehículo:</Label>
        <CustomTextField name="patente" placeholder="Patente" value={formData.patente} onChange={handleChange} />
        </FieldContainer>
        <FieldContainer>
        <Label>Marca del vehículo:</Label>
        <CustomSelect name="marca" value={formData.marca} onChange={handleChange}>
          <option value="">Seleccione una marca</option>
          <option value="Chevrolet">Chevrolet</option>
          <option value="Ford">Ford</option>
          <option value="Toyota">Toyota</option>
        </CustomSelect>
        </FieldContainer>
        <FieldContainer>
        <Label>Modelo del vehículo:</Label>
        <CustomSelect name="modelo" value={formData.modelo} onChange={handleChange}>
          <option value="">Seleccione un modelo</option>
          <option value="Onix Sedan">Onix Sedan</option>
          <option value="Ranger">Ranger</option>
          <option value="Corolla">Corolla</option>
        </CustomSelect>
        </FieldContainer>
        <FieldContainer>
        <Label>Precio del vehículo:</Label>
        <CustomTextField name="precio" placeholder="Precio" value={formData.precio} onChange={handleChange} />
        </FieldContainer>
        </Section>
        <Button type="submit">Enviar</Button>
      </form>
    </FormWrapper>
    </Container>
  );
};

export default Form;
