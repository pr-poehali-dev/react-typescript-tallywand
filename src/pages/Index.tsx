import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroSlides = [
    {
      id: 1,
      image: 'https://cdn.poehali.dev/files/b1f6889a-f6d0-436a-ba25-50d2cc288f63.png',
      title: 'РЕД БРИК 2025',
      subtitle: 'Посвященное событиям, мастер-классам, конкурсам',
      buttonText: 'Узнать подробнее'
    }
  ];

  const newsItems = [
    {
      id: 1,
      title: 'Роман Комаров рассказал о применении ИИ в образовании и преподавательской практике',
      excerpt: 'В контексте ИИ были проведены анализы актуальных направлений применения ИИ в образовании и опыта российских вузов.',
      category: 'НОВОСТИ ВУЗА',
      date: '12 ноября 2024',
      time: '10:30',
      image: 'https://cdn.poehali.dev/projects/b496fcbb-f0b0-4cc0-aba1-82c2b717c61e/files/ef649828-24bb-45aa-b039-4cb417c7f4a3.jpg',
      badge: 'ЭКСКЛЮЗИВ'
    },
    {
      id: 2,
      title: 'МГПУ вошел в число сильнейших вузов Олимпиады — в проектной лаборатории',
      excerpt: 'МГПУ вошел в список 14 российских вузов, отобранных для реализации модели профильных классов высшей школы.',
      category: 'НАША ГОРДОСТЬ',
      date: '10 ноября 2024',
      time: '14:15',
      image: 'https://cdn.poehali.dev/projects/b496fcbb-f0b0-4cc0-aba1-82c2b717c61e/files/9243dd67-1ec0-430b-b7b9-a99bc5799f7b.jpg',
      badge: 'ВАЖНОЕ'
    },
    {
      id: 3,
      title: 'Анила Джирина стала модератором на Всемирном фестивале молодежи',
      excerpt: 'Ранее студентка МГПУ прошла отбор на участие в работе летней школы ВФМ на базе кампуса МГПУ «Медведково».',
      category: 'ДОСТИЖЕНИЯ СТУДЕНТОВ',
      date: '08 ноября 2024',
      time: '09:45',
      image: 'https://cdn.poehali.dev/projects/b496fcbb-f0b0-4cc0-aba1-82c2b717c61e/files/c13762d6-9b2f-488d-a6a0-0b7d4d93051a.jpg'
    },
    {
      id: 4,
      title: 'Именные стипендии Правительства Москвы для первокурсников',
      excerpt: '22-23 года именные стипендии были вручены студентам с высокой успеваемостью. Право на стипендию имеют студенты с доходом не более 150% от прожиточного минимума.',
      category: 'СТИПЕНДИИ И ГРАНТЫ',
      date: '06 ноября 2024',
      time: '11:20',
      image: 'https://cdn.poehali.dev/projects/b496fcbb-f0b0-4cc0-aba1-82c2b717c61e/files/9243dd67-1ec0-430b-b7b9-a99bc5799f7b.jpg'
    },
    {
      id: 5,
      title: 'МГПУ принял делегацию из Педагогического университета Шаньси',
      excerpt: 'Делегация Гаосу обратилась к МГПУ с просьбой о сотрудничестве с китайским университетом 102100 в городе Шаньси.',
      category: 'МЕЖДУНАРОДНОЕ СОТРУДНИЧЕСТВО',
      date: '04 ноября 2024',
      time: '15:00',
      image: 'https://cdn.poehali.dev/projects/b496fcbb-f0b0-4cc0-aba1-82c2b717c61e/files/ef649828-24bb-45aa-b039-4cb417c7f4a3.jpg'
    },
    {
      id: 6,
      title: 'Студентка МГПУ прошла участие в летней школе Академии «Медведково»',
      excerpt: 'Среди участников реализованной культурно-педагогической программы – представители 15 стран мира. Один из их направлений - создание учебно-методических материалов.',
      category: 'КУЛЬТУРА И ТВОРЧЕСТВО',
      date: '02 ноября 2024',
      time: '13:30',
      image: 'https://cdn.poehali.dev/projects/b496fcbb-f0b0-4cc0-aba1-82c2b717c61e/files/c13762d6-9b2f-488d-a6a0-0b7d4d93051a.jpg'
    }
  ];

  const calendarEvents = [
    {
      id: 1,
      title: 'Смотр-показ студента мастерской Ольга Антонова',
      date: '28.08.2024',
      time: '19:00',
      description: 'Программа для выставки показательные работы студентов курса Digital креативности.',
      image: 'https://cdn.poehali.dev/projects/b496fcbb-f0b0-4cc0-aba1-82c2b717c61e/files/c13762d6-9b2f-488d-a6a0-0b7d4d93051a.jpg'
    },
    {
      id: 2,
      title: 'Мастер-класс по дизайну Вятского шрифта в Нижнем Новгороде',
      date: '05.09.2024',
      time: '16:00',
      description: 'Онлайн мастер-класс по использованию особенностей вятского кириллического наследия.',
      image: 'https://cdn.poehali.dev/projects/b496fcbb-f0b0-4cc0-aba1-82c2b717c61e/files/9243dd67-1ec0-430b-b7b9-a99bc5799f7b.jpg'
    },
    {
      id: 3,
      title: 'Открытая лекция о советском студенческом кино',
      date: '07.09.2024',
      time: '18:00',
      description: 'Студенты МГПУ (Яна Поликанова 12 сентября в 19:00 на базе студенческого дома творчества.',
      image: 'https://cdn.poehali.dev/projects/b496fcbb-f0b0-4cc0-aba1-82c2b717c61e/files/ef649828-24bb-45aa-b039-4cb417c7f4a3.jpg'
    },
    {
      id: 4,
      title: 'Всероссийская неделя безопасности — День «Сяксанская-2025»',
      date: '23.09.2024',
      time: '10:00',
      description: 'Студенческая флэшмоб на базе кампуса «Север» МГПУ 27 сентября в Университетстве.',
      image: 'https://cdn.poehali.dev/projects/b496fcbb-f0b0-4cc0-aba1-82c2b717c61e/files/c13762d6-9b2f-488d-a6a0-0b7d4d93051a.jpg'
    },
    {
      id: 5,
      title: 'Первые тотальные в Бланке',
      date: '05.10.2024',
      time: '12:00',
      description: 'В течении парка скидка репликация дней рядом с университетом вокруг.',
      image: 'https://cdn.poehali.dev/projects/b496fcbb-f0b0-4cc0-aba1-82c2b717c61e/files/9243dd67-1ec0-430b-b7b9-a99bc5799f7b.jpg'
    }
  ];

  const galleryItems = [
    {
      id: 1,
      image: 'https://cdn.poehali.dev/projects/b496fcbb-f0b0-4cc0-aba1-82c2b717c61e/files/c13762d6-9b2f-488d-a6a0-0b7d4d93051a.jpg',
      title: 'Фотогалерея 1'
    },
    {
      id: 2,
      image: 'https://cdn.poehali.dev/projects/b496fcbb-f0b0-4cc0-aba1-82c2b717c61e/files/9243dd67-1ec0-430b-b7b9-a99bc5799f7b.jpg',
      title: 'Фотогалерея 2'
    },
    {
      id: 3,
      image: 'https://cdn.poehali.dev/projects/b496fcbb-f0b0-4cc0-aba1-82c2b717c61e/files/ef649828-24bb-45aa-b039-4cb417c7f4a3.jpg',
      title: 'Фотогалерея 3'
    },
    {
      id: 4,
      image: 'https://cdn.poehali.dev/projects/b496fcbb-f0b0-4cc0-aba1-82c2b717c61e/files/c13762d6-9b2f-488d-a6a0-0b7d4d93051a.jpg',
      title: 'Фотогалерея 4'
    },
    {
      id: 5,
      image: 'https://cdn.poehali.dev/projects/b496fcbb-f0b0-4cc0-aba1-82c2b717c61e/files/9243dd67-1ec0-430b-b7b9-a99bc5799f7b.jpg',
      title: 'Фотогалерея 5'
    }
  ];

  const videoItems = [
    {
      id: 1,
      thumbnail: 'https://cdn.poehali.dev/projects/b496fcbb-f0b0-4cc0-aba1-82c2b717c61e/files/ef649828-24bb-45aa-b039-4cb417c7f4a3.jpg',
      title: 'ЦИТАТА: СТУДЕНЧЕСКИЙ БУНТ',
      description: 'Запись о перспективах студенческого самоуправления в МГПУ'
    },
    {
      id: 2,
      thumbnail: 'https://cdn.poehali.dev/projects/b496fcbb-f0b0-4cc0-aba1-82c2b717c61e/files/9243dd67-1ec0-430b-b7b9-a99bc5799f7b.jpg',
      title: 'Студенческая жизнь глазами первокурсника',
      description: 'Интервью о первых впечатлениях студентов первого курса МГПУ'
    },
    {
      id: 3,
      thumbnail: 'https://cdn.poehali.dev/projects/b496fcbb-f0b0-4cc0-aba1-82c2b717c61e/files/c13762d6-9b2f-488d-a6a0-0b7d4d93051a.jpg',
      title: 'Как мы создали студенческий медиапроект',
      description: 'Инструкция для всех, кто хочет запустить свой студенческий медиапроект'
    },
    {
      id: 4,
      thumbnail: 'https://cdn.poehali.dev/projects/b496fcbb-f0b0-4cc0-aba1-82c2b717c61e/files/ef649828-24bb-45aa-b039-4cb417c7f4a3.jpg',
      title: 'Неделя активных движений',
      description: 'Репортаж с открытия Недели студенческих активностей'
    },
    {
      id: 5,
      thumbnail: 'https://cdn.poehali.dev/projects/b496fcbb-f0b0-4cc0-aba1-82c2b717c61e/files/9243dd67-1ec0-430b-b7b9-a99bc5799f7b.jpg',
      title: 'ТОП студенческих новостей недели',
      description: 'Подборка самых ярких событий студенческой жизни за неделю'
    },
    {
      id: 6,
      thumbnail: 'https://cdn.poehali.dev/projects/b496fcbb-f0b0-4cc0-aba1-82c2b717c61e/files/c13762d6-9b2f-488d-a6a0-0b7d4d93051a.jpg',
      title: 'Интервью с ректором',
      description: 'Беседа о приоритетных направлениях развития университета'
    }
  ];

  const partners = [
    'https://cdn.poehali.dev/projects/b496fcbb-f0b0-4cc0-aba1-82c2b717c61e/files/ef649828-24bb-45aa-b039-4cb417c7f4a3.jpg',
    'https://cdn.poehali.dev/projects/b496fcbb-f0b0-4cc0-aba1-82c2b717c61e/files/9243dd67-1ec0-430b-b7b9-a99bc5799f7b.jpg',
    'https://cdn.poehali.dev/projects/b496fcbb-f0b0-4cc0-aba1-82c2b717c61e/files/c13762d6-9b2f-488d-a6a0-0b7d4d93051a.jpg',
    'https://cdn.poehali.dev/projects/b496fcbb-f0b0-4cc0-aba1-82c2b717c61e/files/ef649828-24bb-45aa-b039-4cb417c7f4a3.jpg',
    'https://cdn.poehali.dev/projects/b496fcbb-f0b0-4cc0-aba1-82c2b717c61e/files/9243dd67-1ec0-430b-b7b9-a99bc5799f7b.jpg'
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-3 text-xs">
            <div className="flex items-center space-x-6 text-gray-700 font-medium">
              <a href="#" className="hover:text-gray-900 transition-colors">СТУДЕНТАМ</a>
              <a href="#" className="hover:text-gray-900 transition-colors">СОТРУДНИКАМ</a>
              <a href="#" className="hover:text-gray-900 transition-colors">ВЫПУСКНИКАМ</a>
              <button className="hover:text-gray-900 transition-colors">
                <Icon name="User" size={16} />
              </button>
            </div>
            <div className="flex items-center space-x-6 text-gray-700">
              <Icon name="Accessibility" size={18} />
              <a href="#" className="hover:text-gray-900 transition-colors font-medium">НОВОСТИ</a>
              <a href="#" className="hover:text-gray-900 transition-colors font-medium">СОБЫТИЯ</a>
              <button className="hover:text-gray-900 transition-colors font-medium">ENG</button>
              <button className="hover:text-gray-900 transition-colors font-medium">中文</button>
              <button className="hover:text-gray-900 transition-colors font-medium">ESP</button>
              <Icon name="Search" size={18} />
            </div>
          </div>
        </div>
      </div>

      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-5">
            <div className="flex items-center space-x-12">
              <div className="flex flex-col">
                <div className="text-4xl font-bold text-primary leading-none">30</div>
                <div className="text-[10px] text-gray-700 font-medium leading-tight">
                  <div>МОСКОВСКИЙ</div>
                  <div>ГОРОДСКОЙ</div>
                  <div>УНИВЕРСИТЕТ</div>
                  <div className="text-red-500">МГПУ</div>
                </div>
              </div>
              <nav className="flex space-x-8 text-sm font-bold text-gray-900">
                <a href="#" className="hover:text-primary transition-colors">АБИТУРИЕНТАМ</a>
                <a href="#" className="hover:text-primary transition-colors">ОБ УНИВЕРСИТЕТЕ</a>
                <a href="#" className="hover:text-primary transition-colors">ОБРАЗОВАНИЕ</a>
                <a href="#" className="hover:text-primary transition-colors">НАУКА</a>
                <a href="#" className="hover:text-primary transition-colors">КУЛЬТУРА</a>
                <a href="#" className="hover:text-primary transition-colors">СПОРТ</a>
              </nav>
            </div>
          </div>
        </div>
      </header>

      <section className="relative h-[500px] bg-cover bg-center" style={{ backgroundImage: `url('${heroSlides[currentSlide].image}')` }}>
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative container mx-auto px-4 h-full flex flex-col items-center justify-center text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">{heroSlides[currentSlide].title}</h1>
          <p className="text-xl mb-8">{heroSlides[currentSlide].subtitle}</p>
          <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100 border-2 border-white">
            {heroSlides[currentSlide].buttonText}
          </Button>
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {heroSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentSlide ? 'bg-white w-8' : 'bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-900">ГЛАВНЫЕ НОВОСТИ</h2>
            <a href="#" className="text-primary hover:underline text-sm font-medium flex items-center">
              ВСЕ НОВОСТИ <Icon name="ChevronRight" size={16} className="ml-1" />
            </a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {newsItems.map((item) => (
              <Card key={item.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative">
                  <img src={item.image} alt={item.title} className="w-full h-48 object-cover" />
                  {item.badge && (
                    <Badge className="absolute top-3 left-3 bg-primary text-white">{item.badge}</Badge>
                  )}
                </div>
                <CardContent className="p-4">
                  <div className="text-xs text-gray-500 mb-2">{item.category}</div>
                  <h3 className="font-bold text-lg mb-2 line-clamp-2">{item.title}</h3>
                  <p className="text-sm text-gray-600 mb-3 line-clamp-3">{item.excerpt}</p>
                  <div className="flex items-center text-xs text-gray-500">
                    <Icon name="Calendar" size={14} className="mr-1" />
                    {item.date}
                    <Icon name="Clock" size={14} className="ml-3 mr-1" />
                    {item.time}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Календарь событий</h2>
            <a href="#" className="text-primary hover:underline text-sm font-medium flex items-center">
              ВСЕ СОБЫТИЯ <Icon name="ChevronRight" size={16} className="ml-1" />
            </a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {calendarEvents.map((event) => (
              <Card key={event.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <img src={event.image} alt={event.title} className="w-full h-40 object-cover" />
                <CardContent className="p-4">
                  <h3 className="font-bold text-sm mb-2 line-clamp-2">{event.title}</h3>
                  <p className="text-xs text-gray-600 mb-2 line-clamp-2">{event.description}</p>
                  <div className="flex items-center text-xs text-gray-500">
                    <Icon name="Calendar" size={12} className="mr-1" />
                    {event.date}
                    <Icon name="Clock" size={12} className="ml-2 mr-1" />
                    {event.time}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="flex justify-center mt-8">
            <div className="flex space-x-2">
              <button className="p-2 hover:bg-gray-200 rounded">
                <Icon name="ChevronLeft" size={20} />
              </button>
              <button className="p-2 hover:bg-gray-200 rounded">
                <Icon name="ChevronRight" size={20} />
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Фотогалерея</h2>
            <a href="#" className="text-primary hover:underline text-sm font-medium flex items-center">
              ВСЕ ФОТО <Icon name="ChevronRight" size={16} className="ml-1" />
            </a>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {galleryItems.map((item) => (
              <div key={item.id} className="relative aspect-square overflow-hidden rounded-lg hover:opacity-90 transition-opacity cursor-pointer">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-8">
            <div className="flex space-x-2">
              <button className="p-2 hover:bg-gray-200 rounded">
                <Icon name="ChevronLeft" size={20} />
              </button>
              <button className="p-2 hover:bg-gray-200 rounded">
                <Icon name="ChevronRight" size={20} />
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Видеоблог</h2>
            <a href="#" className="text-primary hover:underline text-sm font-medium flex items-center">
              ВСЕ ВИДЕО <Icon name="ChevronRight" size={16} className="ml-1" />
            </a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {videoItems.map((item) => (
              <Card key={item.id} className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
                <div className="relative">
                  <img src={item.thumbnail} alt={item.title} className="w-full h-48 object-cover" />
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center">
                      <Icon name="Play" size={28} className="text-primary ml-1" />
                    </div>
                  </div>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-bold text-sm mb-2">{item.title}</h3>
                  <p className="text-xs text-gray-600">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="flex justify-center mt-8">
            <div className="flex space-x-2">
              <button className="p-2 hover:bg-gray-200 rounded">
                <Icon name="ChevronLeft" size={20} />
              </button>
              <button className="p-2 hover:bg-gray-200 rounded">
                <Icon name="ChevronRight" size={20} />
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-center items-center space-x-12 grayscale opacity-60">
            {partners.map((partner, index) => (
              <img key={index} src={partner} alt={`Partner ${index + 1}`} className="h-16 object-contain" />
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="font-bold mb-4">Полезные ссылки</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-primary transition-colors">УСЛОВИЯ УЧЕБЫ ОБУЧЕНИЯ</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">ПЕРСОНАЛЬНАЯ ИНФОРМАЦИЯ</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">БАЗОВАЯ КАФЕДРА</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">ВЫБИРАЕМ СТРУКТУРУ СПОРТ</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">ПЛАТФОРМА</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">РЕЕСТР УНИВЕРСИТЕТА</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Сотрудникам</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-primary transition-colors">УНИВЕРСИТЕТ</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">ЦЕНТРЫ</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">ДЕБЮТ СТУДИЯ</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">ПРОФСОЮЗНАЯ ДЕЯТЕЛЬНОСТЬ</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">СТУДЕНЧЕСКИЕ МЕРОПРИЯТИЯ</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">СТУДЕНТ+МАГНАТ</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Социальные сети</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-primary transition-colors">ОФИЦИАЛЬНЫЕ СОЦСЕТИ СТОЛБСТВО</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">ТЕЛЕГРАММ ВИД+</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">ДЕБЮТАНСКАЯ СТУДИЯ ВК</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">INSTAGRAM СТУДИЯ</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">TELEGRAM КАНАЛ</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">ВКОНТАКТЕ КАНАЛ</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8 flex items-center justify-between text-sm">
            <div className="text-gray-400">
              © РЕД БРИК 2025 | <a href="#" className="hover:text-primary transition-colors">Политика конфиденциальности</a>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-primary transition-colors">
                <Icon name="Facebook" size={20} />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <Icon name="Twitter" size={20} />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <Icon name="Instagram" size={20} />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <Icon name="Youtube" size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;