import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Calendar } from '@/components/ui/calendar';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('main');
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const newsItems = [
    {
      id: 1,
      title: 'Роман Ковалев рассказал о развитии рекламы и презентационной графики',
      category: 'Лекции',
      date: '15 ноября 2025',
      image: 'https://cdn.poehali.dev/projects/b496fcbb-f0b0-4cc0-aba1-82c2b717c61e/files/ef649828-24bb-45aa-b039-4cb417c7f4a3.jpg',
      label: 'ЭКСКЛЮЗИВ'
    },
    {
      id: 2,
      title: 'ИПТУП вошел в топ-10 сильных российских вузов Олимпиад',
      category: 'Достижения',
      date: '12 ноября 2025',
      image: 'https://cdn.poehali.dev/projects/b496fcbb-f0b0-4cc0-aba1-82c2b717c61e/files/9243dd67-1ec0-430b-b7b9-a99bc5799f7b.jpg',
      label: 'ВАЖНОЕ'
    },
    {
      id: 3,
      title: 'Анита Джорджи стала модератором на форуме ОАЭ',
      category: 'События',
      date: '10 ноября 2025',
      image: 'https://cdn.poehali.dev/projects/b496fcbb-f0b0-4cc0-aba1-82c2b717c61e/files/c13762d6-9b2f-488d-a6a0-0b7d4d93051a.jpg',
      label: ''
    },
    {
      id: 4,
      title: 'Новости от Приемной комиссии Москвы',
      category: 'Новости',
      date: '8 ноября 2025',
      image: 'https://cdn.poehali.dev/projects/b496fcbb-f0b0-4cc0-aba1-82c2b717c61e/files/9243dd67-1ec0-430b-b7b9-a99bc5799f7b.jpg',
      label: ''
    },
    {
      id: 5,
      title: 'ИПТУП летние директора Педагогического университета',
      category: 'Партнерство',
      date: '5 ноября 2025',
      image: 'https://cdn.poehali.dev/projects/b496fcbb-f0b0-4cc0-aba1-82c2b717c61e/files/ef649828-24bb-45aa-b039-4cb417c7f4a3.jpg',
      label: ''
    },
    {
      id: 6,
      title: 'Студенты ИПТУП участвуют в летней школе Академии',
      category: 'Образование',
      date: '3 ноября 2025',
      image: 'https://cdn.poehali.dev/projects/b496fcbb-f0b0-4cc0-aba1-82c2b717c61e/files/c13762d6-9b2f-488d-a6a0-0b7d4d93051a.jpg',
      label: ''
    }
  ];

  const events = [
    {
      id: 1,
      title: 'Мастер-класс по дизайну',
      date: '2025-12-05',
      category: 'Мастер-классы',
      time: '14:00',
      location: 'Аудитория 301'
    },
    {
      id: 2,
      title: 'Открытая олимпиада студенческих команд',
      date: '2025-12-08',
      category: 'Олимпиады',
      time: '10:00',
      location: 'Главный корпус'
    },
    {
      id: 3,
      title: 'Концерт творческой студии',
      date: '2025-12-10',
      category: 'Концерты',
      time: '18:00',
      location: 'Актовый зал'
    },
    {
      id: 4,
      title: 'Лекция приглашенного спикера',
      date: '2025-12-12',
      category: 'Лекции',
      time: '16:00',
      location: 'Конференц-зал'
    },
    {
      id: 5,
      title: 'Фестиваль студенческих театров',
      date: '2025-12-15',
      category: 'Фестивали',
      time: '19:00',
      location: 'Театральный зал'
    }
  ];

  const galleryItems = [
    {
      id: 1,
      image: 'https://cdn.poehali.dev/projects/b496fcbb-f0b0-4cc0-aba1-82c2b717c61e/files/c13762d6-9b2f-488d-a6a0-0b7d4d93051a.jpg',
      title: 'Конкурс лета в Академии',
      category: 'Концерты'
    },
    {
      id: 2,
      image: 'https://cdn.poehali.dev/projects/b496fcbb-f0b0-4cc0-aba1-82c2b717c61e/files/9243dd67-1ec0-430b-b7b9-a99bc5799f7b.jpg',
      title: 'Открытие нового учебного корпуса',
      category: 'События'
    },
    {
      id: 3,
      image: 'https://cdn.poehali.dev/projects/b496fcbb-f0b0-4cc0-aba1-82c2b717c61e/files/ef649828-24bb-45aa-b039-4cb417c7f4a3.jpg',
      title: 'Мастер-классы с выпускниками',
      category: 'Образование'
    },
    {
      id: 4,
      image: 'https://cdn.poehali.dev/projects/b496fcbb-f0b0-4cc0-aba1-82c2b717c61e/files/c13762d6-9b2f-488d-a6a0-0b7d4d93051a.jpg',
      title: 'Студенческий Новый Год',
      category: 'Праздники'
    }
  ];

  const videoItems = [
    {
      id: 1,
      thumbnail: 'https://cdn.poehali.dev/projects/b496fcbb-f0b0-4cc0-aba1-82c2b717c61e/files/ef649828-24bb-45aa-b039-4cb417c7f4a3.jpg',
      title: 'Как мы готовимся к экзаменам',
      duration: '5:32',
      views: '2.5K'
    },
    {
      id: 2,
      thumbnail: 'https://cdn.poehali.dev/projects/b496fcbb-f0b0-4cc0-aba1-82c2b717c61e/files/9243dd67-1ec0-430b-b7b9-a99bc5799f7b.jpg',
      title: 'Путеводитель для первокурсника',
      duration: '8:15',
      views: '4.1K'
    },
    {
      id: 3,
      thumbnail: 'https://cdn.poehali.dev/projects/b496fcbb-f0b0-4cc0-aba1-82c2b717c61e/files/c13762d6-9b2f-488d-a6a0-0b7d4d93051a.jpg',
      title: 'Интервью с деканом',
      duration: '12:40',
      views: '1.8K'
    }
  ];

  const categories = ['all', 'Мастер-классы', 'Олимпиады', 'Концерты', 'Лекции', 'Фестивали'];

  const filteredEvents = selectedCategory === 'all'
    ? events
    : events.filter(event => event.category === selectedCategory);

  return (
    <div className="min-h-screen bg-white">
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center space-x-8">
              <h1 className="text-2xl font-bold text-gray-900">РЕД БРИК</h1>
              <nav className="hidden md:flex space-x-6">
                <button
                  onClick={() => setActiveSection('main')}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    activeSection === 'main' ? 'text-primary' : 'text-gray-600'
                  }`}
                >
                  Главная
                </button>
                <button
                  onClick={() => setActiveSection('about')}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    activeSection === 'about' ? 'text-primary' : 'text-gray-600'
                  }`}
                >
                  О нас
                </button>
                <button
                  onClick={() => setActiveSection('news')}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    activeSection === 'news' ? 'text-primary' : 'text-gray-600'
                  }`}
                >
                  Новости
                </button>
                <button
                  onClick={() => setActiveSection('calendar')}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    activeSection === 'calendar' ? 'text-primary' : 'text-gray-600'
                  }`}
                >
                  Календарь
                </button>
                <button
                  onClick={() => setActiveSection('gallery')}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    activeSection === 'gallery' ? 'text-primary' : 'text-gray-600'
                  }`}
                >
                  Фотогалерея
                </button>
                <button
                  onClick={() => setActiveSection('video')}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    activeSection === 'video' ? 'text-primary' : 'text-gray-600'
                  }`}
                >
                  Видеоблог
                </button>
                <button
                  onClick={() => setActiveSection('contacts')}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    activeSection === 'contacts' ? 'text-primary' : 'text-gray-600'
                  }`}
                >
                  Контакты
                </button>
              </nav>
            </div>
            <Button variant="outline" size="sm" className="hidden md:flex">
              <Icon name="User" className="mr-2 h-4 w-4" />
              Личный кабинет
            </Button>
          </div>
        </div>
      </header>

      {activeSection === 'main' && (
        <>
          <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url('https://cdn.poehali.dev/projects/b496fcbb-f0b0-4cc0-aba1-82c2b717c61e/files/c13762d6-9b2f-488d-a6a0-0b7d4d93051a.jpg')`,
              }}
            >
              <div className="absolute inset-0 bg-black/50" />
            </div>
            <div className="relative z-10 text-center text-white px-4 animate-fade-in">
              <h2 className="text-5xl md:text-7xl font-bold mb-4">РЕД БРИК 2025</h2>
              <p className="text-xl md:text-2xl mb-8">Россия талантами полна, молодой движущей силой</p>
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Изучить все события
              </Button>
            </div>
          </section>

          <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-3xl font-bold text-gray-900">Главные новости</h3>
                <Button variant="ghost" onClick={() => setActiveSection('news')}>
                  Все новости
                  <Icon name="ArrowRight" className="ml-2 h-4 w-4" />
                </Button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {newsItems.map((item, index) => (
                  <Card
                    key={item.id}
                    className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer animate-fade-in"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="relative">
                      <img src={item.image} alt={item.title} className="w-full h-48 object-cover" />
                      {item.label && (
                        <Badge className="absolute top-3 left-3 bg-primary text-white">
                          {item.label}
                        </Badge>
                      )}
                    </div>
                    <CardContent className="p-4">
                      <Badge variant="outline" className="mb-2">
                        {item.category}
                      </Badge>
                      <h4 className="font-semibold text-gray-900 mb-2 line-clamp-2">{item.title}</h4>
                      <p className="text-sm text-gray-500">{item.date}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          <section className="py-16">
            <div className="container mx-auto px-4">
              <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                Календарь событий
              </h3>
              <div className="text-center">
                <Button onClick={() => setActiveSection('calendar')} size="lg">
                  Открыть календарь
                  <Icon name="Calendar" className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
          </section>
        </>
      )}

      {activeSection === 'about' && (
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-4xl font-bold text-gray-900 mb-8 animate-fade-in">О нас</h2>
            <div className="prose prose-lg max-w-none animate-fade-in">
              <p className="text-gray-700 mb-4">
                РЕД БРИК - это ведущий творческий университет России, объединяющий талантливых студентов
                и преподавателей из разных уголков страны.
              </p>
              <p className="text-gray-700 mb-4">
                Мы предоставляем уникальные возможности для развития творческого потенциала, профессионального
                роста и самореализации в различных областях искусства и культуры.
              </p>
              <p className="text-gray-700">
                Наша миссия - воспитывать новое поколение творцов, способных изменить мир к лучшему
                через искусство, инновации и профессионализм.
              </p>
            </div>
          </div>
        </section>
      )}

      {activeSection === 'news' && (
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-gray-900 mb-8 animate-fade-in">Все новости</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {newsItems.map((item, index) => (
                <Card
                  key={item.id}
                  className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="relative">
                    <img src={item.image} alt={item.title} className="w-full h-48 object-cover" />
                    {item.label && (
                      <Badge className="absolute top-3 left-3 bg-primary text-white">
                        {item.label}
                      </Badge>
                    )}
                  </div>
                  <CardContent className="p-4">
                    <Badge variant="outline" className="mb-2">
                      {item.category}
                    </Badge>
                    <h4 className="font-semibold text-gray-900 mb-2">{item.title}</h4>
                    <p className="text-sm text-gray-500">{item.date}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {activeSection === 'calendar' && (
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-gray-900 mb-8 animate-fade-in">Календарь событий</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-1">
                <Card className="p-4">
                  <Calendar
                    mode="single"
                    selected={selectedDate}
                    onSelect={setSelectedDate}
                    className="rounded-md border"
                  />
                  <div className="mt-6">
                    <h4 className="font-semibold mb-3">Фильтр по категориям</h4>
                    <div className="flex flex-wrap gap-2">
                      {categories.map((cat) => (
                        <Badge
                          key={cat}
                          variant={selectedCategory === cat ? 'default' : 'outline'}
                          className="cursor-pointer"
                          onClick={() => setSelectedCategory(cat)}
                        >
                          {cat === 'all' ? 'Все' : cat}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </Card>
              </div>
              <div className="lg:col-span-2">
                <div className="space-y-4">
                  {filteredEvents.map((event, index) => (
                    <Card
                      key={event.id}
                      className="p-6 hover:shadow-lg transition-shadow animate-fade-in"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <Badge variant="outline">{event.category}</Badge>
                            <span className="text-sm text-gray-500">{event.date}</span>
                          </div>
                          <h3 className="text-xl font-semibold text-gray-900 mb-2">{event.title}</h3>
                          <div className="flex items-center gap-4 text-sm text-gray-600">
                            <div className="flex items-center gap-1">
                              <Icon name="Clock" className="h-4 w-4" />
                              {event.time}
                            </div>
                            <div className="flex items-center gap-1">
                              <Icon name="MapPin" className="h-4 w-4" />
                              {event.location}
                            </div>
                          </div>
                        </div>
                        <Button size="sm">Подробнее</Button>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {activeSection === 'gallery' && (
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-gray-900 mb-8 animate-fade-in">Фотогалерея</h2>
            <Tabs defaultValue="all" className="w-full">
              <TabsList className="mb-8">
                <TabsTrigger value="all">Все</TabsTrigger>
                <TabsTrigger value="concerts">Концерты</TabsTrigger>
                <TabsTrigger value="events">События</TabsTrigger>
                <TabsTrigger value="education">Образование</TabsTrigger>
              </TabsList>
              <TabsContent value="all">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {galleryItems.map((item, index) => (
                    <Card
                      key={item.id}
                      className="overflow-hidden group cursor-pointer animate-fade-in"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <div className="relative overflow-hidden">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-64 object-cover transition-transform group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                          <Icon name="ZoomIn" className="h-8 w-8 text-white" />
                        </div>
                      </div>
                      <CardContent className="p-4">
                        <Badge variant="outline" className="mb-2">
                          {item.category}
                        </Badge>
                        <h4 className="font-semibold text-gray-900">{item.title}</h4>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="concerts">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {galleryItems
                    .filter((item) => item.category === 'Концерты')
                    .map((item) => (
                      <Card key={item.id} className="overflow-hidden group cursor-pointer">
                        <div className="relative overflow-hidden">
                          <img
                            src={item.image}
                            alt={item.title}
                            className="w-full h-64 object-cover transition-transform group-hover:scale-110"
                          />
                        </div>
                        <CardContent className="p-4">
                          <Badge variant="outline" className="mb-2">
                            {item.category}
                          </Badge>
                          <h4 className="font-semibold text-gray-900">{item.title}</h4>
                        </CardContent>
                      </Card>
                    ))}
                </div>
              </TabsContent>
              <TabsContent value="events">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {galleryItems
                    .filter((item) => item.category === 'События')
                    .map((item) => (
                      <Card key={item.id} className="overflow-hidden group cursor-pointer">
                        <div className="relative overflow-hidden">
                          <img
                            src={item.image}
                            alt={item.title}
                            className="w-full h-64 object-cover transition-transform group-hover:scale-110"
                          />
                        </div>
                        <CardContent className="p-4">
                          <Badge variant="outline" className="mb-2">
                            {item.category}
                          </Badge>
                          <h4 className="font-semibold text-gray-900">{item.title}</h4>
                        </CardContent>
                      </Card>
                    ))}
                </div>
              </TabsContent>
              <TabsContent value="education">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {galleryItems
                    .filter((item) => item.category === 'Образование')
                    .map((item) => (
                      <Card key={item.id} className="overflow-hidden group cursor-pointer">
                        <div className="relative overflow-hidden">
                          <img
                            src={item.image}
                            alt={item.title}
                            className="w-full h-64 object-cover transition-transform group-hover:scale-110"
                          />
                        </div>
                        <CardContent className="p-4">
                          <Badge variant="outline" className="mb-2">
                            {item.category}
                          </Badge>
                          <h4 className="font-semibold text-gray-900">{item.title}</h4>
                        </CardContent>
                      </Card>
                    ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      )}

      {activeSection === 'video' && (
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-gray-900 mb-8 animate-fade-in">Видеоблог</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {videoItems.map((item, index) => (
                <Card
                  key={item.id}
                  className="overflow-hidden group cursor-pointer hover:shadow-lg transition-shadow animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={item.thumbnail}
                      alt={item.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center group-hover:bg-black/40 transition-colors">
                      <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                        <Icon name="Play" className="h-8 w-8 text-white ml-1" />
                      </div>
                    </div>
                    <Badge className="absolute bottom-3 right-3 bg-black/70 text-white">
                      {item.duration}
                    </Badge>
                  </div>
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">{item.title}</h4>
                    <div className="flex items-center text-sm text-gray-500">
                      <Icon name="Eye" className="h-4 w-4 mr-1" />
                      {item.views} просмотров
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {activeSection === 'contacts' && (
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-4xl font-bold text-gray-900 mb-8 animate-fade-in">Контакты</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-4">Адрес</h3>
                <div className="space-y-3 text-gray-700">
                  <div className="flex items-start gap-3">
                    <Icon name="MapPin" className="h-5 w-5 text-primary mt-1" />
                    <p>г. Москва, ул. Примерная, д. 123</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="Phone" className="h-5 w-5 text-primary mt-1" />
                    <p>+7 (495) 123-45-67</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="Mail" className="h-5 w-5 text-primary mt-1" />
                    <p>info@redbrick.ru</p>
                  </div>
                </div>
              </Card>
              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-4">Социальные сети</h3>
                <div className="space-y-3">
                  <Button variant="outline" className="w-full justify-start">
                    <Icon name="Instagram" className="mr-2 h-5 w-5" />
                    Instagram
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Icon name="Facebook" className="mr-2 h-5 w-5" />
                    ВКонтакте
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Icon name="Youtube" className="mr-2 h-5 w-5" />
                    YouTube
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </section>
      )}

      <footer className="bg-gray-900 text-white py-12 mt-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">РЕД БРИК 2025</h3>
              <p className="text-gray-400">
                Ведущий творческий университет России
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Полезные ссылки</h4>
              <div className="space-y-2">
                <button
                  onClick={() => setActiveSection('about')}
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  О нас
                </button>
                <button
                  onClick={() => setActiveSection('news')}
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  Новости
                </button>
                <button
                  onClick={() => setActiveSection('calendar')}
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  Календарь событий
                </button>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Сотрудничество</h4>
              <div className="space-y-2">
                <a href="#" className="block text-gray-400 hover:text-white transition-colors">
                  Студентам
                </a>
                <a href="#" className="block text-gray-400 hover:text-white transition-colors">
                  Работа у нас
                </a>
                <a href="#" className="block text-gray-400 hover:text-white transition-colors">
                  Студенческая жизнь
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>© 2025 РЕД БРИК. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
