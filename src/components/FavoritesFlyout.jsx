import { useStore } from '@nanostores/react';
import { isFavoritesOpen, favoritesItems } from '../stores/favorites';
import { Icon } from '@iconify/react';

export default function FavoritesFlyout() {
  const $isFavoritesOpen = useStore(isFavoritesOpen);
  const $favoritesItems = useStore(favoritesItems);

  // return $isFavoritesOpen ? (
  return (
    <aside
      className={`absolute p-6 bg-gray-50 top-12 lg:top-14 right-0 border-2 h-screen overflow-y-auto transition duration-300 ease-in-out origin-top-right ${
        $isFavoritesOpen ? 'scale-100' : 'scale-0'
      }`}
    >
      <h2 className="text-center text-xl text-gray-800">Favoritos</h2>
      <hr />
      <ul>
        {$favoritesItems.map((item) => (
          <li key={item.id} className="text-sm flex gap-2 border-b-2">
            <img className="w-14" src={item.thumbnail} alt={item.thumbnail} />
            <div className="w-full flex flex-col justify-between">
              {/* <div className="w-full"> */}
              <p>{item.title}</p>
              <div className="flex justify-between text-gray-800">
                <p>{item.seller_custom_field}</p>
                <p>${item.price}</p>
                <Icon
                  className="w-6 text-2xl inline text-red-500"
                  icon="mdi:cards-heart"
                />
              </div>
            </div>
          </li>
        ))}
      </ul>
    </aside>
    // ) : null;
  );
}
