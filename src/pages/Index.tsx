// import { Button } from "@/components/ui/button";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Heart, Star, Phone, MapPin, Clock, Scissors, Bath, Stethoscope, ArrowRight, Shield, Award, Users, Menu } from "lucide-react";
// import heroPets from "@/assets/hero-pets.jpg";
// import clinicInterior from "@/assets/clinic-interior.jpg";

// const Index = () => {
//   return (
//     <div className="min-h-screen bg-background font-body">
//       {/* Header */}
//       <header className="fixed top-0 w-full z-50 border-b border-border/50 bg-card/80 backdrop-blur-xl">
//         <div className="container mx-auto px-4 py-4 flex items-center justify-between">
//           <div className="flex items-center space-x-3">
//             <div className="relative">
//               <Heart className="h-10 w-10 text-primary animate-bounce-soft" />
//               <div className="absolute -top-1 -right-1 w-4 h-4 bg-accent rounded-full animate-ping"></div>
//             </div>
//             <h1 className="text-3xl font-display font-bold text-foreground">PetCare<span className="text-primary">+</span></h1>
//           </div>
//           <nav className="hidden md:flex space-x-8">
//             <a href="#servicos" className="text-muted-foreground hover:text-primary transition-all duration-300 font-medium relative group">
//               Serviços
//               <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
//             </a>
//             <a href="#sobre" className="text-muted-foreground hover:text-primary transition-all duration-300 font-medium relative group">
//               Sobre
//               <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
//             </a>
//             <a href="#depoimentos" className="text-muted-foreground hover:text-primary transition-all duration-300 font-medium relative group">
//               Depoimentos
//               <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
//             </a>
//             <a href="#contato" className="text-muted-foreground hover:text-primary transition-all duration-300 font-medium relative group">
//               Contato
//               <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
//             </a>
//           </nav>
//           <div className="flex items-center space-x-4">
//             <Button className="bg-primary hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all duration-300 group">
//               Agendar
//               <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
//             </Button>
//             <Button variant="ghost" size="icon" className="md:hidden">
//               <Menu className="h-6 w-6" />
//             </Button>
//           </div>
//         </div>
//       </header>

//       {/* Hero Section */}
//       <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
//         {/* Background with gradient overlay */}
//         <div className="absolute inset-0 bg-gradient-to-br from-secondary via-background to-accent/10"></div>
        
//         {/* Floating elements */}
//         <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full animate-float"></div>
//         <div className="absolute bottom-20 right-10 w-32 h-32 bg-accent/10 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
//         <div className="absolute top-1/2 left-20 w-16 h-16 bg-primary/5 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
        
//         <div className="relative z-10 container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center mt-20">
//           <div className="text-center lg:text-left space-y-8 animate-fade-in-up">
//             <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
//               <Shield className="w-4 h-4 mr-2" />
//               Clínica de confiança há 10+ anos
//             </div>
//             <h2 className="text-5xl lg:text-7xl font-display font-bold text-foreground leading-tight">
//               Cuidado completo para seu <span className="text-transparent bg-gradient-to-r from-primary to-accent bg-clip-text">melhor amigo</span>
//             </h2>
//             <p className="text-xl text-muted-foreground leading-relaxed max-w-xl">
//               Oferecemos serviços veterinários de excelência, banho, tosa e muito carinho para o seu pet. Equipe especializada e ambiente acolhedor.
//             </p>
//             <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
//               <Button size="lg" className="bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-primary-foreground shadow-xl hover:shadow-2xl transition-all duration-300 group text-lg px-8 py-6">
//                 <Phone className="mr-2 h-5 w-5" />
//                 Agendar Consulta
//                 <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
//               </Button>
//               <Button size="lg" variant="outline" className="border-2 border-border hover:bg-accent hover:border-accent text-lg px-8 py-6 group">
//                 Ver Serviços
//                 <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
//               </Button>
//             </div>
            
//             {/* Stats */}
//             <div className="flex flex-wrap gap-8 justify-center lg:justify-start pt-8">
//               <div className="text-center lg:text-left">
//                 <div className="text-3xl font-bold text-primary">5000+</div>
//                 <div className="text-sm text-muted-foreground">Pets atendidos</div>
//               </div>
//               <div className="text-center lg:text-left">
//                 <div className="text-3xl font-bold text-primary">98%</div>
//                 <div className="text-sm text-muted-foreground">Satisfação</div>
//               </div>
//               <div className="text-center lg:text-left">
//                 <div className="text-3xl font-bold text-primary">10+</div>
//                 <div className="text-sm text-muted-foreground">Anos de experiência</div>
//               </div>
//             </div>
//           </div>
          
//           <div className="relative lg:order-last animate-fade-in-up" style={{animationDelay: '0.3s'}}>
//             <div className="relative rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 group">
//               <img 
//                 src={heroPets} 
//                 alt="Pets felizes - Golden Retriever e gato" 
//                 className="w-full h-auto group-hover:scale-105 transition-transform duration-700"
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
//             </div>
            
//             {/* Floating cards */}
//             <div className="absolute -top-4 -left-4 bg-card rounded-2xl p-4 shadow-xl animate-float">
//               <div className="flex items-center space-x-2">
//                 <Star className="h-5 w-5 text-accent fill-accent" />
//                 <span className="font-semibold text-foreground">4.9/5</span>
//               </div>
//               <p className="text-sm text-muted-foreground">Avaliação média</p>
//             </div>
            
//             <div className="absolute -bottom-4 -right-4 bg-card rounded-2xl p-4 shadow-xl animate-float" style={{animationDelay: '1s'}}>
//               <div className="flex items-center space-x-2">
//                 <Heart className="h-5 w-5 text-primary fill-primary" />
//                 <span className="font-semibold text-foreground">24/7</span>
//               </div>
//               <p className="text-sm text-muted-foreground">Suporte</p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Services Section */}
//       <section id="servicos" className="py-20 bg-background relative overflow-hidden">
//         {/* Background decoration */}
//         <div className="absolute top-0 left-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
//         <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
        
//         <div className="container mx-auto px-4 relative z-10">
//           <div className="text-center mb-16">
//             <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
//               <Award className="w-4 h-4 mr-2" />
//               Serviços Premium
//             </div>
//             <h3 className="text-5xl font-display font-bold text-foreground mb-6">Nossos Serviços</h3>
//             <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
//               Oferecemos uma gama completa de serviços para manter seu pet saudável e feliz
//             </p>
//           </div>
          
//           <div className="grid md:grid-cols-3 gap-8">
//             {[
//               {
//                 icon: Stethoscope,
//                 title: "Consultas Veterinárias",
//                 description: "Exames completos, vacinas e tratamentos com veterinários especializados. Diagnósticos precisos e cuidado personalizado.",
//                 color: "text-primary",
//                 bgColor: "bg-primary/10",
//                 features: ["Exames clínicos", "Vacinação", "Cirurgias", "Emergências 24h"]
//               },
//               {
//                 icon: Scissors,
//                 title: "Tosa Profissional", 
//                 description: "Cortes personalizados para cada raça, deixando seu pet ainda mais bonito e confortável.",
//                 color: "text-accent",
//                 bgColor: "bg-accent/10",
//                 features: ["Tosa higiênica", "Cortes estéticos", "Aparar unhas", "Limpeza de ouvidos"]
//               },
//               {
//                 icon: Bath,
//                 title: "Banho & Hidratação",
//                 description: "Banhos relaxantes com produtos de qualidade premium e hidratação profunda da pelagem.",
//                 color: "text-primary",
//                 bgColor: "bg-primary/10",
//                 features: ["Shampoos premium", "Hidratação", "Secagem especializada", "Perfumes pet"]
//               }
//             ].map((service, index) => (
//               <Card key={index} className="border-border hover:shadow-2xl transition-all duration-500 group hover:-translate-y-2">
//                 <CardHeader className="text-center pb-4">
//                   <div className={`inline-flex items-center justify-center w-20 h-20 ${service.bgColor} rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
//                     <service.icon className={`h-10 w-10 ${service.color}`} />
//                   </div>
//                   <CardTitle className="text-2xl font-display font-bold text-foreground group-hover:text-primary transition-colors">
//                     {service.title}
//                   </CardTitle>
//                 </CardHeader>
//                 <CardContent className="text-center">
//                   <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>
//                   <ul className="space-y-2">
//                     {service.features.map((feature, idx) => (
//                       <li key={idx} className="flex items-center text-sm text-muted-foreground">
//                         <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
//                         {feature}
//                       </li>
//                     ))}
//                   </ul>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* About Section */}
//       <section id="sobre" className="py-20 bg-gradient-to-br from-secondary/50 to-accent/10 relative">
//         <div className="container mx-auto px-4">
//           <div className="grid lg:grid-cols-2 gap-16 items-center">
//             <div className="order-2 lg:order-1">
//               <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
//                 <img 
//                   src={clinicInterior} 
//                   alt="Interior moderno da clínica veterinária" 
//                   className="w-full h-auto group-hover:scale-105 transition-transform duration-700"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                
//                 {/* Floating stats */}
//                 <div className="absolute top-6 left-6 bg-card/90 backdrop-blur rounded-2xl p-4 animate-float">
//                   <div className="flex items-center space-x-2">
//                     <Users className="h-5 w-5 text-primary" />
//                     <span className="font-semibold text-foreground">15+</span>
//                   </div>
//                   <p className="text-sm text-muted-foreground">Profissionais</p>
//                 </div>
                
//                 <div className="absolute bottom-6 right-6 bg-card/90 backdrop-blur rounded-2xl p-4 animate-float" style={{animationDelay: '1s'}}>
//                   <div className="flex items-center space-x-2">
//                     <Award className="h-5 w-5 text-accent" />
//                     <span className="font-semibold text-foreground">ISO</span>
//                   </div>
//                   <p className="text-sm text-muted-foreground">Certificado</p>
//                 </div>
//               </div>
//             </div>
            
//             <div className="order-1 lg:order-2">
//               <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
//                 <Shield className="w-4 h-4 mr-2" />
//                 Nossa História
//               </div>
//               <h3 className="text-5xl font-display font-bold text-foreground mb-6">
//                 Mais de <span className="text-transparent bg-gradient-to-r from-primary to-accent bg-clip-text">10 anos</span> cuidando dos pets
//               </h3>
//               <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
//                 Somos uma clínica veterinária dedicada ao bem-estar dos animais. Nossa equipe é formada por profissionais apaixonados que tratam cada pet com o carinho que ele merece.
//               </p>
              
//               <div className="grid grid-cols-2 gap-6 mb-8">
//                 {[
//                   { number: "5000+", label: "Pets atendidos", icon: Heart },
//                   { number: "98%", label: "Satisfação", icon: Star },
//                   { number: "15+", label: "Especialistas", icon: Users },
//                   { number: "24/7", label: "Emergências", icon: Phone }
//                 ].map((stat, index) => (
//                   <div key={index} className="bg-card rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 group">
//                     <stat.icon className="h-8 w-8 text-primary mx-auto mb-3 group-hover:scale-110 transition-transform" />
//                     <div className="text-3xl font-bold text-primary group-hover:scale-105 transition-transform">{stat.number}</div>
//                     <div className="text-sm text-muted-foreground">{stat.label}</div>
//                   </div>
//                 ))}
//               </div>
              
//               <div className="bg-card rounded-2xl p-8 shadow-lg">
//                 <h4 className="text-2xl font-display font-semibold text-foreground mb-6 flex items-center">
//                   <Clock className="mr-3 h-6 w-6 text-primary" />
//                   Horário de Funcionamento
//                 </h4>
//                 <div className="space-y-4">
//                   {[
//                     { days: "Segunda - Sexta", hours: "8h - 18h", highlight: true },
//                     { days: "Sábado", hours: "8h - 14h", highlight: false },
//                     { days: "Domingo", hours: "Emergências", highlight: false }
//                   ].map((schedule, index) => (
//                     <div key={index} className={`flex justify-between items-center p-3 rounded-lg ${schedule.highlight ? 'bg-primary/10 text-primary' : 'text-muted-foreground'}`}>
//                       <span className="font-medium">{schedule.days}</span>
//                       <span className="font-semibold">{schedule.hours}</span>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Testimonials */}
//       <section id="depoimentos" className="py-20 bg-background relative overflow-hidden">
//         <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
        
//         <div className="container mx-auto px-4 relative z-10">
//           <div className="text-center mb-16">
//             <div className="inline-flex items-center px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium mb-6">
//               <Star className="w-4 h-4 mr-2" />
//               Depoimentos
//             </div>
//             <h3 className="text-5xl font-display font-bold text-foreground mb-6">O que nossos clientes dizem</h3>
//             <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
//               A opinião de quem confia em nós é nossa maior recompensa
//             </p>
//           </div>
          
//           <div className="grid lg:grid-cols-3 gap-8">
//             {[
//               {
//                 name: "Maria Silva",
//                 pet: "Luna (Golden Retriever)",
//                 text: "Equipe maravilhosa! A Luna sempre sai feliz e cheirosa dos banhos. O atendimento é excepcional e o carinho com os pets é notável.",
//                 avatar: "MS",
//                 rating: 5
//               },
//               {
//                 name: "João Santos",
//                 pet: "Rex (Pastor Alemão)", 
//                 text: "Veterinários muito competentes. Salvaram a vida do meu Rex com um diagnóstico rápido e preciso. Profissionalismo e dedicação exemplares.",
//                 avatar: "JS",
//                 rating: 5
//               },
//               {
//                 name: "Ana Costa",
//                 pet: "Mimi (Gato Persa)",
//                 text: "Melhor petshop da cidade! Cuidam da Mimi com muito carinho e atenção. Ambiente limpo, moderno e a equipe é super atenciosa.",
//                 avatar: "AC",
//                 rating: 5
//               }
//             ].map((testimonial, index) => (
//               <Card key={index} className="border-border hover:shadow-2xl transition-all duration-500 group hover:-translate-y-1">
//                 <CardContent className="p-8">
//                   <div className="flex mb-6">
//                     {[...Array(testimonial.rating)].map((_, i) => (
//                       <Star key={i} className="h-6 w-6 fill-accent text-accent" />
//                     ))}
//                   </div>
//                   <p className="text-muted-foreground mb-6 text-lg leading-relaxed italic">"{testimonial.text}"</p>
//                   <div className="flex items-center space-x-4">
//                     <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-white font-bold">
//                       {testimonial.avatar}
//                     </div>
//                     <div>
//                       <p className="font-semibold text-foreground text-lg">{testimonial.name}</p>
//                       <p className="text-sm text-muted-foreground">{testimonial.pet}</p>
//                     </div>
//                   </div>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Contact/CTA Section */}
//       <section id="contato" className="py-20 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground relative overflow-hidden">
//         {/* Background decoration */}
//         <div className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
//         <div className="absolute bottom-0 right-0 w-72 h-72 bg-white/5 rounded-full blur-3xl"></div>
        
//         <div className="container mx-auto px-4 text-center relative z-10">
//           <div className="max-w-4xl mx-auto">
//             <h3 className="text-5xl lg:text-6xl font-display font-bold mb-6">
//               Agende já uma <span className="text-accent">consulta!</span>
//             </h3>
//             <p className="text-2xl mb-12 opacity-90 leading-relaxed">
//               Seu pet merece o melhor cuidado. Entre em contato conosco e proporcione qualidade de vida para seu melhor amigo.
//             </p>
            
//             <div className="grid md:grid-cols-3 gap-8 mb-12">
//               {[
//                 { icon: Phone, text: "(11) 9999-9999", label: "WhatsApp" },
//                 { icon: MapPin, text: "Rua das Flores, 123", label: "Localização" },
//                 { icon: Clock, text: "Seg-Sex: 8h-18h", label: "Funcionamento" }
//               ].map((contact, index) => (
//                 <div key={index} className="bg-white/10 backdrop-blur rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 group">
//                   <contact.icon className="h-8 w-8 mx-auto mb-4 group-hover:scale-110 transition-transform" />
//                   <p className="font-semibold text-lg mb-1">{contact.text}</p>
//                   <p className="text-sm opacity-80">{contact.label}</p>
//                 </div>
//               ))}
//             </div>
            
//             <div className="flex flex-col sm:flex-row gap-4 justify-center">
//               <Button size="lg" variant="secondary" className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-xl hover:shadow-2xl transition-all duration-300 group text-lg px-8 py-6">
//                 <Phone className="mr-2 h-5 w-5" />
//                 Falar no WhatsApp
//                 <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
//               </Button>
//               <Button size="lg" variant="outline" className="border-2 border-white/20 hover:bg-white/10 text-lg px-8 py-6 group">
//                 <MapPin className="mr-2 h-5 w-5" />
//                 Ver Localização
//                 <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
//               </Button>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="py-12 bg-card border-t border-border">
//         <div className="container mx-auto px-4">
//           <div className="grid lg:grid-cols-4 gap-8 mb-8">
//             <div className="lg:col-span-2">
//               <div className="flex items-center space-x-3 mb-4">
//                 <Heart className="h-8 w-8 text-primary" />
//                 <span className="text-2xl font-display font-bold text-foreground">PetCare<span className="text-primary">+</span></span>
//               </div>
//               <p className="text-muted-foreground leading-relaxed max-w-md">
//                 Dedicados ao bem-estar e felicidade dos pets há mais de 10 anos. Cuidamos do seu melhor amigo com amor e profissionalismo.
//               </p>
//             </div>
            
//             <div>
//               <h4 className="font-semibold text-foreground mb-4">Serviços</h4>
//               <ul className="space-y-2 text-muted-foreground">
//                 <li>Consultas Veterinárias</li>
//                 <li>Banho e Tosa</li>
//                 <li>Cirurgias</li>
//                 <li>Emergências</li>
//               </ul>
//             </div>
            
//             <div>
//               <h4 className="font-semibold text-foreground mb-4">Contato</h4>
//               <ul className="space-y-2 text-muted-foreground">
//                 <li>(11) 9999-9999</li>
//                 <li>Rua das Flores, 123</li>
//                 <li>contato@petcareplus.com</li>
//                 <li>Seg-Sex: 8h-18h</li>
//               </ul>
//             </div>
//           </div>
          
//           <div className="border-t border-border pt-8 text-center">
//             <p className="text-muted-foreground">© 2024 PetCare+. Todos os direitos reservados. Feito com ❤️ para pets.</p>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default Index;
