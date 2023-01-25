const TranslationButton = ({ name, image }) => {
    return (
        <button>
            <aside>
                <img src={image} alt={name} width="55" />
                <section>
                    <b>{name}</b>
                </section>
            </aside>
        </button>
    );
};

export default TranslationButton;
