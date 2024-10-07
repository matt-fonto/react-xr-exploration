import { VRScene } from "./scenes/VRScene";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center gap-y-10 my-20">
      <h2 className="text-2xl tracking-normal font-semibold">React XR Lib</h2>

      <VRScene />
    </div>
  );
}
