export default function Stats({ items }) {
    if (items.length === 0)
        return (
            <em className="stats">
                Start adding some item to your packing list 🚀
            </em>
        );

    const numItem = items.length;

    const packedItem = items.filter((item) => item.packed).length;

    const percentage = Math.round((packedItem / numItem) * 100);

    return (
        <footer className="stats">
            {percentage === 100 ? (
                <em> You have got everything! Ready to go ✈️</em>
            ) : (
                <em>
                    🧳 You have {numItem} items on your list and you already
                    packed
                    {packedItem}({percentage}%)
                </em>
            )}
        </footer>
    );
}
