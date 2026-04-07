import { createSignal, onMount, onCleanup } from "solid-js";

const LivaBuoyDashboard = () => {
  const [data, setData] = createSignal(null);

  onMount(() => {
    const fetchData = async () => {
      const res = await fetch("https://liva-buoy/data");
      const json = await res.json();
      setData(json);
    };

    fetchData();
    const id = setInterval(fetchData, 1000);

    onCleanup(() => clearInterval(id));
  });

  return <div>{JSON.stringify(data())}</div>;
};

export default LivaBuoyDashboard;
