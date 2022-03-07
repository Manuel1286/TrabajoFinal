import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup,Validators } from '@angular/forms';
import { config } from 'src/app/config/config';
import { JugadorService } from '../servicios/jugadores.servicios';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class CONTACTComponent implements OnInit {

  form:FormGroup
  equipo: AbstractControl
  rendimiento:AbstractControl
  valorApostar:AbstractControl
   
  config = config

  constructor(private fb: FormBuilder, private jugadorServices: JugadorService) { 
    this.form = this.fb.group({
      equipo:['', Validators.required],
      rendimiento:['', Validators.required],
      valorApostar:['', Validators.required],

    })

    this.equipo = this.form.controls['equipo']
    this.rendimiento = this.form.controls['rendimiento']
    this.valorApostar = this.form.controls['valorApostar']
    
  }

  ngOnInit(): void {
  }
  get f(){
    return this.form.controls
  }

  sendMessage(){
    if(this.form.invalid)
    return

    console.log(this.form.value)
    this.jugadorServices.crear(this.form.value).subscribe((res:any)=>{
      console.log(res)

    })
  }

}
