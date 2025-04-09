'use client';
import Image from "next/image";

export default function Menu({items}){
    return(
        <div>
            {items.map((item, index)=>(
                <div key={item.id || index}>
                    <Image 
                    src={item.src} 
                    alt={item.alt} 
                    width={500} 
                    height={500}/>
                </div>
            ))}
        </div>
    )
}