import { useParams } from "react-router";
import Usestate from "./Usestate";
import UseEffect from "./UseEffect";


export default function HookDetails() {
    const {slug} = useParams();
  return (
    <div>
        {slug==='use-state' && <h1 className="text-3xl font-bold mb-4"><Usestate/></h1>}
        {slug==='use-effect' && <h1 className="text-3xl font-bold mb-4"><UseEffect/></h1>}
        {slug==='use-context' && <h1 className="text-3xl font-bold mb-4">Use Context</h1>}
        {slug==='use-ref' && <h1 className="text-3xl font-bold mb-4">Use Ref</h1>}
        {slug==='use-memo' && <h1 className="text-3xl font-bold mb-4">Use Memo</h1>}
        {slug==='use-callback' && <h1 className="text-3xl font-bold mb-4">Use Callback</h1>}
    </div>
  )
}
