import styled from 'styled-components'

export const Container = styled.button`
    width: 100%;
    display: flex; 
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
    gap: 0.6rem;

    background-color: ${({ theme }) => theme.COLORS.PINK};
    color: ${({ theme }) => theme.COLORS.GRAY_300};

    height: 5.2rem;
    border: none;
    padding: 0 1.6rem;

    margin-top: 2.4rem;
    border-radius: 1.0rem;

    font-size: 1.6rem;
    font-weight: 500;

    transition: 0.2s;

    &:hover {
        background-color: ${({ theme }) => theme.COLORS.GRAY_500};
        color: ${({ theme }) => theme.COLORS.PINK};
    }
`