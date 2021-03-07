import { Component } from "@angular/core";

@Component({
    selector: 'app-footer',
    template: `
            <footer>    
                <div class="footer">
                    <span><strong>Developed by:</strong></span> Amitav Mishra
                </div>
            </footer>
    `,

    styles: [`
            .footer {
                position: fixed;
                bottom: 0;
                left: 0;
                text-align: center;
                width: 100%;
                height: auto;
                background-color: #efeeee;
                font-size: 22px;
                padding: 15px;
            }
    `]
})
export class FooterComponent {

    constructor(){}
}