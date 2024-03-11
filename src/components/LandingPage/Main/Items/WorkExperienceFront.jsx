export default function WorkExperienceFront({ items }) {
    return (
        <>
            {items.length &&
                items.map((item) => {
                    return (
                        <>
                            <div
                                className="main__workExperience__list__frontEnd__specificWork"
                                key={item.id}
                            >
                                <p className="main__workExperience__list__frontEnd__specificWork__name">
                                    {item.title}
                                </p>
                                <p className="main__workExperience__list__frontEnd__specificWork__dataWork">
                                    {item.data}
                                </p>
                                <p className="main__workExperience__list__frontEnd__specificWork__postWork">
                                    {item.post}
                                </p>
                                <p className="main__workExperience__list__frontEnd__specificWork__discription">
                                    {item.content}
                                </p>
                            </div>
                        </>
                    );
                })}
        </>
    );
}
