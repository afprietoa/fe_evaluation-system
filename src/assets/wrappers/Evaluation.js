import { FormLabel, Radio } from '@chakra-ui/react'
import styled from 'styled-components'

export const DivForm = styled.div`
    margin: 70px 0px;
    border: 1px solid #DEDEDE;
    border-radius: 8px;
    padding: 10px;     
`

export const FormStyle = styled.form`
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 0 10px 2px rgba(100, 100, 100, 0.1);
    width: 600px;
`

export const LabelStyled = styled(FormLabel)`
    padding: 1rem;
    font-size: 1.25rem;
    text-align: left;
    margin:0;
`

export const RadioStyled = styled(Radio)`
    padding: 0;
    font-size: 1.2rem;
    margin: 1rem 0;
`

export const ButtonStyled = styled.button`
    background-color: #8e44ad;
    border: none;
    width: 100%;
    font-size: 1.1rem;
    padding: 1.3rem;
    color: white;
    &:hover{
        background-color: #732d91;
    }
    &:focus{
        outline: none;
        background-color: #5e3370;
    }
`

export const ContainerStyled = styled.div`
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 0 10px 2px rgba(100, 100, 100, 0.1);
    width: 100%;
    padding: 4rem;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const NavBarStyled = styled.div`
    height: 50px;
    display: flex;
    justify-content: space-around;
    align-content: center;
    flex-wrap: wrap;
`