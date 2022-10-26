import styled from 'styled-components/macro'

export const TimelineContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  min-height: 100vh;
`

export const ResponsiveContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1100px;
  height: 100vh;
`

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 28px;
`

export const Heading = styled.h1`
  text-align: center;
  color: #171f46;
  font-family: 'Roboto';
  font-size: 16px;
  line-height: 2.5;
  margin: 0px;
  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`

export const CCBPHeading = styled.span`
  color: #2b237c;
  font-family: 'Roboto';
  font-size: 22px;
  margin: 0px;
  @media screen and (min-width: 768px) {
    font-size: 28px;
  }
`
