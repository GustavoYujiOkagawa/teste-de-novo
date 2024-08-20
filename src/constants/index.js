//Importar as imagens. Mas sempre coloque na ordem aonde você vai querer usar.
import imagem1 from "../public/images/Image1.png";
import imagem3 from "../public/images/imagem3.png";
import imagem4 from "../public/images/imagem4.png";
import imagem5 from "../public/images/image2.png";


import IconArrowLeft from '../public/images/IconArrowLeft.png'
import iconHamburguer from '../public/images/iconHamburguer.png'
import iconCart from '../public/images/iconCart.png'

const IMAGES =[
    { id: 1, src: imagem1, alt: 'Imagens do Cardapio'},
    { id: 2, src: imagem3, alt: 'Imagens do Cardapio'},
    { id: 3, src: imagem4, alt: 'Imagens do Cardapio'},
    { id: 4, src: imagem5, alt: 'Imagens do Cardapio'},
]
 export {
    imagem1,
    imagem3,
    imagem4,
    imagem5,
 }


export const ICON =[
    { id: 1, src: IconArrowLeft, alt: 'Imagens do icone'},
    { id: 2, src: iconHamburguer, alt: 'Imagens do icone'},
    { id: 3, src: iconCart, alt: 'Imagens do icone'},
]

export {
    iconHamburguer,
    iconCart,
    IconArrowLeft
}