export const PortfolioItemPage = ({ item }) => {
    return (
        <>
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            <img src={item.imageUrl} width="30vw" />
            {/* You don’t have to add styling yet as we will use
             a new design system in the 2nd part of the exercise. */}
        </>
    );
}

