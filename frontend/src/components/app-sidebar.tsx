"use client"

import * as React from "react"
import { NavMain } from "@/components/nav-main"
import { NavProjects } from "@/components/nav-projects"
import { NavUser } from "@/components/nav-user"
import { TeamSwitcher } from "@/components/team-switcher"
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarRail } from "@/components/ui/sidebar"
import { BuildingComplex, House, Trophy, LayoutDashboard, CircleDollarSign, Users, User, ChartNoAxesColumn, Gift, Settings2 } from "lucide-react"

// This is sample data.
const data = {
  user: {
    name: "Vitor Paloco",
    email: "vitor.paloco@podyum.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "Empresa A",
      logo: (<BuildingComplex/>),
      plan: "Plano Pro",
    },
    {
      name: "Empresa B",
      logo: (<BuildingComplex/>),
      plan: "Plano Básico",
    },
    {
      name: "Empresa C",
      logo: (<BuildingComplex/>),
      plan: "Plano Plus",
    },
  ],
  navMain: [
    {
      title: "Início",
      url: "#",
      icon: (<House/>),
      isActive: true,
      items: [],
    },
    {
      title: "Ranking",
      url: "#",
      icon: (<Trophy/>),
      items: [],
    },
    {
      title: "Campanhas",
      url: "#",
      icon: (<LayoutDashboard/>),
      items: [
        {
          title: "Em andamento",
          url: "#",
        },
        {
          title: "Encerradas",
          url: "#",
        },
      ],
    },
    {
      title: "Vendas",
      url: "#",
      icon: (<CircleDollarSign/>),
      items: [],
    },
  ],
  projects: [
    {
      name: "Empresas",
      url: "#",
      icon: (<BuildingComplex/>),
    },
    {
      name: "Usuários",
      url: "#",
      icon: (<User/>),
    },
    {
      name: "Perfis",
      url: "#",
      icon: (<Users/>),
    },
    {
      name: "Relatórios",
      url: "#",
      icon: (<ChartNoAxesColumn/>),
    },
    {
      name: "Pontuação & Prêmios",
      url: "#",
      icon: (<Gift/>),
    },
    {
      name: "Configurações",
      url: "#",
      icon: (<Settings2/>),
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavProjects projects={data.projects} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
