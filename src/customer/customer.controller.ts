import { Body, Controller, Get, Post } from '@nestjs/common';
import { CustomerService } from './customer.service';
import { CreateCustomerDto } from './dto/createcustomer.dto';

@Controller('customer')
export class CustomerController {
    constructor(private readonly customerService: CustomerService) {}

    // GET
    @Get()
    getCustomers(){
        return this.customerService.getAllCustomers();
    }

    // POST
    @Post()
    addCustomer(@Body() createCustomerDto: CreateCustomerDto){
        return this.customerService.addCustomer(createCustomerDto);
    }
}
