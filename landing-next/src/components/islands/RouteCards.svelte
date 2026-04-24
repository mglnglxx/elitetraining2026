<script lang="ts">
  import { onMount } from "svelte";
  import { ArrowRight } from "@lucide/svelte";
  import { animate, stagger } from "motion";
  import { Button } from "$lib/components/ui/button";

  type RouteOption = {
    value: "equipo" | "medida" | "profesional";
    eyebrow: string;
    label: string;
    description: string;
  };

  type Props = {
    routes: RouteOption[];
  };

  let { routes }: Props = $props();
  let activeRoute = $state<string | null>(null);
  let grid: HTMLDivElement;

  const ctaLabel: Record<RouteOption["value"], string> = {
    equipo: "Hablar con un asesor",
    medida: "Diseñar el programa",
    profesional: "Ver cursos"
  };

  onMount(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion || !grid) return;

    animate(
      grid.querySelectorAll("[data-route-card]"),
      { opacity: [0, 1], transform: ["translateY(12px)", "translateY(0px)"] },
      { duration: 0.55, delay: stagger(0.06), easing: [0.22, 1, 0.36, 1] }
    );
  });
</script>

<div class="route-grid" bind:this={grid}>
  {#each routes as route, index}
    <a
      class="route-card"
      class:is-route-active={activeRoute === route.value}
      href="#solicitud"
      data-route-card
      data-step={String(index + 1).padStart(2, "0")}
      data-route-value={route.value}
      data-analytics-event="cta_click"
      data-analytics-label={`home_route_${route.value}`}
      onmouseenter={() => (activeRoute = route.value)}
      onfocus={() => (activeRoute = route.value)}
    >
      <p class="eyebrow">{route.eyebrow}</p>
      <h3>{route.label}</h3>
      <p>{route.description}</p>
      <span class="route-link">
        {ctaLabel[route.value]}
        <ArrowRight size={16} strokeWidth={2.4} aria-hidden="true" />
      </span>
    </a>
  {/each}

  <a
    class="route-card"
    class:is-route-active={activeRoute === "campus"}
    href="https://campusvirtual.hidrocarburos.com.co"
    target="_blank"
    rel="noreferrer"
    data-route-card
    data-step="04"
    data-analytics-event="cta_click"
    data-analytics-label="home_route_campus"
    onmouseenter={() => (activeRoute = "campus")}
    onfocus={() => (activeRoute = "campus")}
  >
    <p class="eyebrow">A tu ritmo</p>
    <h3>Aprender en el campus virtual</h3>
    <p>Cursos pregrabados disponibles 24/7. Avanzas a tu ritmo y obtienes certificación al finalizar.</p>
    <span class="route-link">
      Entrar al campus
      <ArrowRight size={16} strokeWidth={2.4} aria-hidden="true" />
    </span>
  </a>
</div>

<div class="route-island-proof" aria-label="Sistema de rutas activo">
  <span>Rutas interactivas activas</span>
  <Button href="#solicitud" variant="ghost" size="sm">Solicitar orientación</Button>
</div>
