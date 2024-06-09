import {
    NgForm, FormGroup, FormControl, Validators, FormBuilder
} from '@angular/forms'
export class Customer {
    CustomerCode: string = "";
    CustomerName: string = "";
    CustomerAmount: number = 0;
    formCustomerGroup!: FormGroup;
    constructor() {
        var _builder = new FormBuilder();
        this.formCustomerGroup = _builder.group({}); //use the builder to create
        //control -->validation
        this.formCustomerGroup.addControl("CustomerNameControl", new FormControl('', Validators.required));
        //customer code contol ->required,4 letter numeric
        var validationCollection = [];
        validationCollection.push(Validators.required);
        validationCollection.push(Validators.pattern("^[0-9]{4,4}$"))
        this.formCustomerGroup.addControl("CustomerCodeControl", new FormControl('', Validators.compose(validationCollection)));

    }
}