import styled from 'styled-components/macro'

export const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
`

export const TextField = styled.input`
  height: 32px;
  width: 200px;
  border-radius: 3px;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border: 1px solid #e5e5e5;
  padding: 0 32px 0 16px;

  &:hover {
    cursor: pointer;
  }
`

export const ClearButton = styled.button`
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  height: 34px;
  width: 32px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  cursor: pointer;
`

export const Button = styled.a`
  display: inline-block;
  padding: 0.5em 1em;
  margin: 0.5em 1em;
  border-radius: 3px;
  border: 1px solid #e5e5e5;
  background-color: #f5f5f5;
  text-decoration: none;
`
