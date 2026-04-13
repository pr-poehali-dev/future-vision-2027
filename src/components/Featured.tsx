export default function Featured() {
  return (
    <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center min-h-screen px-6 py-12 lg:py-0 bg-white">
      <div className="flex-1 h-[400px] lg:h-[800px] mb-8 lg:mb-0 lg:order-2">
        <img
          src="https://cdn.poehali.dev/projects/6c676f3f-e259-43f0-bd09-3b77e8bb9412/files/da5e4278-530e-461a-9bf8-de0db1c4379a.jpg"
          alt="Разработка котлована экскаватором"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex-1 text-left lg:h-[800px] flex flex-col justify-center lg:mr-12 lg:order-1">
        <h3 className="uppercase mb-4 text-sm tracking-wide text-neutral-600">Механизированная разработка грунта</h3>
        <p className="text-2xl lg:text-4xl mb-8 text-neutral-900 leading-tight">
          От снятия плодородного слоя до выравнивания под нулевые отметки бульдозерами.
          Котлованы любой сложности с прокладкой всех инженерных сетей.
        </p>
        <button className="bg-black text-white border border-black px-4 py-2 text-sm transition-all duration-300 hover:bg-white hover:text-black cursor-pointer w-fit uppercase tracking-wide">
          Заказать работы
        </button>
      </div>
    </div>
  );
}