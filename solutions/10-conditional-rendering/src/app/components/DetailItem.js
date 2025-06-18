import { useParams } from "react-router-dom";
import PropTypes from "prop-types";
import { itemImages } from "../../assets/items";
import ItemType from "../../types/item";
import "./DetailItem.css";

function DetailItem({ items }) {
  const { id } = useParams();
  const detailItem = items.find((item) => item.itemId === id);

  return (
    <div className="detail-item-component">
      {detailItem ? (
        <>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="details-image"
            src={itemImages[detailItem.imageId]}
            alt={detailItem.title}
          />
          <h2>{detailItem.title}</h2>
          {detailItem.description && <h6>{detailItem.description}</h6>}
          <div>${(detailItem.salePrice ?? detailItem.price).toFixed(2)}</div>
        </>
      ) : (
        <h2>Unknown Item</h2>
      )}
    </div>
  );
}

DetailItem.propTypes = {
  items: PropTypes.arrayOf(ItemType).isRequired,
};

export default DetailItem;
