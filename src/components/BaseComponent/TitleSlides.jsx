

const TitleSlides = ({option,optionseen}) => {
    return (
        <>
            <h3>{option.htitle}</h3>
            <div>
                <p>{option.ptitle}</p>
                <a href="">نمایش بیشتر</a>
            </div>
        </>
    );
}

export default TitleSlides;