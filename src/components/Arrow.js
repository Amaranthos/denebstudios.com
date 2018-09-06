import styled from 'react-emotion';

const Arrow = styled('i')(p => ({
    border: 'solid #FFFFFF',
    borderWidth: '0 .25em .25em 0',
    display: 'inline-block',
    padding: 3,
    opacity: p.opacity
}));

export const RightArrow = styled(Arrow)({
    transform: 'rotate(-45deg)'
});

export const DownArrow = styled(Arrow)({
    transform: 'rotate(45deg)'
});