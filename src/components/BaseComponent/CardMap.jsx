import CardClub from "./CardClub";





const CardMap = ({clubItems}) => {
    return (
        <>
            {clubItems?.map((item) => <CardClub key={Math.random()} address={item.address} title={item.title} img={item.img} location={item.location} woman={item.woman} man={item.man} doted={item.doted} listItemOne={item.listItemOne} listItemTwo={item.listItemTwo} listItemThree={item.listItemThree} reserve={item.reserve} price={item.price} />)}
        </>
    );
}

export default CardMap;