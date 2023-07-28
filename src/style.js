import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';
import img from '../src/assets/bg.jpg';

export const Global = createGlobalStyle`

body {
  background-image: url('${img}');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
   background-attachment: fixed;
}

*{
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
ul {

  list-style: none;
}

a{
  text-decoration: none;

}

img {
  display: block;
  max-width: 100%;
  height: auto;
}


`;
