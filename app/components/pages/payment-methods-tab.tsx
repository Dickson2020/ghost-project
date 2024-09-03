import { Card } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { CheckCircle, Trash2Icon } from "lucide-react";
import './payment-methods-tab.css'
import Image from "next/image";

export default function PaymentMethodsTab(){

    return(
        <div className="payment-tab-container">

            <div className="section-1">

                <ScrollArea className="scroll-component">
                    <div className="scroll-view-inner">
                        <Card className="added-cards">
                        <Card className="card-type-icon-card">
                                <Image width={30} height={30} src='/vercel.svg' alt="card type icon" className="card-type-icon"/>
                            </Card>
                            <div className="added-card-details">
                             <span className="added-card-details-number">****5961</span>
                             <span className="added-card-details-expiry">Expires 07/27</span>
                            </div>

                            <div className="added-card-details-icons">
                            <CheckCircle className="selected-card-check"/>
                            <Trash2Icon className="card-delete"/>
                            </div>
                        </Card>


                        <Card className="added-cards">
                            <Card className="card-type-icon-card">
                                <Image width={30} height={30} src='/vercel.svg' alt="card type icon" className="card-type-icon"/>
                            </Card>

                            <div className="added-card-details">
                             <span className="added-card-details-number">****2243</span>
                             <span className="added-card-details-expiry">Expires 01/29</span>
                            </div>

                            <div className="added-card-details-icons">
                            <div/>
                            <Trash2Icon className="card-delete"/>
                            </div>
                        </Card>
                    </div>
                </ScrollArea>

            </div>

            <div className="section-2">
                <button className="add-payment-method-button">Add payment method</button>
            </div>

        </div>
    )
}