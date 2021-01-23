import React from 'react';
import styled from "styled-components";


const Character = (props) => {

    const {info} = props;

    const nameObj = (
      info.map(obj => {
          return obj.name;
      })
  );

  const year = (
    info.map(obj => {
        return obj.birth_year;
    })
);

const eye = (
  info.map(obj => {
      return obj.eye_color;
  })
);

const hair = (
  info.map(obj => {
      return obj.hair_color;
  })
);

  const height = (
      info.map(obj => {
          return obj.height;
      })
  );
  
  const mass = (
    info.map(obj => {
        return obj.mass;
    })
);


  return (
      <MainSectionStyle>
        
         <BoxStyles>
          <HeadName>{nameObj[0]}</HeadName>

          <BodyStyle>
            <h3>Description</h3>
            <p>Birth Year: {year[0]}</p>
            <p>Eye Color: {eye[0]}</p>
            <p>Hair Color: {hair[0]}</p>
            <p>Height: {height[0]}</p>
            <p>Mass: {mass[0]}</p>
          </BodyStyle>

        </BoxStyles>

        <BoxStyles>
         <HeadName>{nameObj[3]}</HeadName>

         <BodyStyle>
           <h3>Description</h3>
           <p>Birth Year: {year[3]}</p>
           <p>Eye Color: {eye[3]}</p>
           <p>Hair Color: {hair[3]}</p>
           <p>Height: {height[3]}</p>
           <p>Mass: {mass[3]}</p>
         </BodyStyle>

     </BoxStyles>

     <BoxStyles>
            <HeadName>{nameObj[4]}</HeadName>
    
            <BodyStyle>
              <h3>Description</h3>
              <p>Birth Year: {year[4]}</p>
              <p>Eye Color: {eye[4]}</p>
              <p>Hair Color: {hair[4]}</p>
              <p>Height: {height[4]}</p>
              <p>Mass: {mass[4]}</p>
            </BodyStyle>
    
        </BoxStyles>

        <BoxStyles>
          <HeadName>{nameObj[2]}</HeadName>
  
          <BodyStyle>
            <h3>Description</h3>
            <p>Birth Year: {year[2]}</p>
            <p>Eye Color: {eye[2]}</p>
            <p>Hair Color: {hair[2]}</p>
            <p>Height: {height[2]}</p>
            <p>Mass: {mass[2]}</p>
          </BodyStyle>
  
      </BoxStyles>

      </MainSectionStyle>
  );

}

const MainSectionStyle = styled.div`
display:flex;
flex-wrap:wrap;
max-width: 100%;
border: 5px solid ${pr => pr.theme.primaryColor};
border-radius: 8px;
margin: 2%;
padding: 1.75%;
`;

const BoxStyles = styled.section`
  width:48%;
  background-color: ${pr => pr.theme.primaryColor};
  opacity: 0.75;
  border-radius: 8px;
  margin: 0 auto;
  margin-bottom: 2%;
`;

const HeadName = styled.h2`
  text-align:center;
  text-shadow: 1px 1px 5px ${pr => pr.theme.white};
  border-bottom: 2px double ${pr => pr.theme.secondaryColor};
  padding-bottom: 2%;
`;

const BodyStyle = styled.div`
  padding: 0.5% 4%;
  padding-top: 0;
`;

export default Character;
