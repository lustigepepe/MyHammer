import { TestBed, ComponentFixture, async } from '@angular/core/testing';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
let comp: AppComponent;
let fixture: ComponentFixture<AppComponent>;

// it is possible to test more then I have done
// if you need some more test please contact me
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
      ], imports: [
        HttpClientModule,
      ],
    }).compileComponents();
  }));

  it('should create the component', async(() => {
    fixture = TestBed.createComponent(AppComponent);
    comp = fixture.debugElement.componentInstance;
    expect(comp).toBeTruthy();
  }));

  it('should receive all jobs data', async(() => {
    expect(comp.data).toBeTruthy();
  }));

});
