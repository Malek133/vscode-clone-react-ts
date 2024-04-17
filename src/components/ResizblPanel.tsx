import { ReactNode } from "react";
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels"


interface IProps {
    defaultLayout?:number[] | undefined;
    LeftPanel:ReactNode
    RightPanel:ReactNode
    showPanel:boolean
}

const ResizeblPanel  = ({defaultLayout=[33,67],LeftPanel,RightPanel,showPanel}:IProps) => {

    const onLayout =  (sizes: number[]) => {
  document.cookie  = `react-resizable-panels:layout=${JSON.stringify(sizes)};`
    }
  return (
    <PanelGroup direction="horizontal" onLayout={onLayout} autoSaveId="condition">
        {showPanel && (
            <>
            <Panel className="text-white" defaultSize={defaultLayout[0]}>
      {LeftPanel}
    </Panel>
    
    <PanelResizeHandle className="bg-zinc-500 w-0.5" />
            </>
        )}
    
    <Panel className="text-white" defaultSize={defaultLayout[1]}>
      {RightPanel}
    </Panel>
  </PanelGroup>
  )
}

export default ResizeblPanel