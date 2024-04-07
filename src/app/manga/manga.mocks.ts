export const mangaList : manga[] =[
    {id:1,volumen:'Jujutsu Kaisen 0',portada:'assets/images/jujutsu_0.jpg', paginas:'200 paginas', fecha:'9 Octubre 2020'},
    {id:2,volumen:'Jujutsu Kaisen 1',portada:'assets/images/jujutsu_1.jpg', paginas:'192 paginas', fecha:'6 Marzo 2020'},
    {id:3,volumen:'Jujutsu Kaisen 2',portada:'assets/images/jujutsu_2.jpg', paginas:'192 paginas', fecha:'15 Mayo 2020'}
]
    
export interface manga {
    id:number;
    volumen:string;
    portada:string;
    paginas:string;
    fecha:string; 
}