
export interface Passenger{
    name: string,
    children?: string[];
}

const passenger1: Passenger = {
    name :"Fernando",
}


const passenger2: Passenger = {
    name :"Melissa",
    children: ["Juan", "Carlos"],
}


const returnChildrenNumber = (passenger : Passenger): number => {

    const howManyChildren = passenger.children?.length || 0;
    //forma de confiar a type de que nunca vas a recibir un nullo
    //const howManyChildren = passenger.children!.length

    console.log(passenger.name,howManyChildren);

    return howManyChildren;
}

returnChildrenNumber(passenger2);
returnChildrenNumber(passenger1);