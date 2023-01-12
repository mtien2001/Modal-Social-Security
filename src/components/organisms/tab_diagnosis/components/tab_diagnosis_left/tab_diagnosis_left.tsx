import React, {useCallback} from "react";
import {DivDiagnosisLeft, FlexTabLeft, Title} from "../tab_diagnosis.styled";
import {images} from "../../../../assets/images";
import {ITabdiagnosisleft} from "./tab_diagnosis_left.types";

export const TabDiagnosisLeft: React.FC<ITabdiagnosisleft> = (props): JSX.Element => {
    const {type} = props

    const renderTabLeft = useCallback((type: string) => {
        switch (type) {
            case "whenHeDied": {
                return (
                    <DivDiagnosisLeft>
                        <FlexTabLeft>
                            <img src={images.whenHeDiedIcon} width={'48px'}/>
                            <Title>亡くなった時</Title>
                        </FlexTabLeft>
                    </DivDiagnosisLeft>
                )
            }
            case "whenMedicalExpensesBecomeHigh": {
                return (
                    <DivDiagnosisLeft>
                        <FlexTabLeft>
                            <img src={images.whenMedicalExpensesBecomeHighIcon} width={'48px'}/>
                            <Title>
                                病気やケガで
                                <br />
                                医療費が高額になった時
                            </Title>
                        </FlexTabLeft>
                    </DivDiagnosisLeft>
                )
            }
            case "whenYouCanNotWork": {
                return (
                    <DivDiagnosisLeft>
                        <FlexTabLeft>
                            <img src={images.whenYouCanNotWorkIcon} width={'48px'}/>
                            <Title>働けなくなった時</Title>
                        </FlexTabLeft>
                    </DivDiagnosisLeft>
                )
            }
            case "whenInTrouble": {
                return (
                    <DivDiagnosisLeft>
                        <FlexTabLeft>
                            <img src={images.whenInTroubleIcon} width={'48px'}/>
                            <Title>障害状態になった時</Title>
                        </FlexTabLeft>
                    </DivDiagnosisLeft>
                )
            }
            case "whenChildBorn": {
                return (
                    <DivDiagnosisLeft>
                        <FlexTabLeft>
                            <img src={images.whenChildBornIcon} width={'48px'}/>
                            <Title>子どもが生まれる時</Title>
                        </FlexTabLeft>
                    </DivDiagnosisLeft>
                )
            }
        }
    }, [])

    return (
        <div>
            {renderTabLeft(type)}
        </div>
    )
}