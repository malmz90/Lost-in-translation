const TranslationButton = ({ translation, onSelect }) => {
    console.log(translation.image);
    return (
        <button onClick={() => onSelect(translation.id)}>
            <aside>
                <img
                    src={translation.image}
                    alt={translation.name}
                    width="55"
                />
                <section>
                    <b>{translation.name}</b>
                </section>
            </aside>
        </button>
    );
};

export default TranslationButton;
