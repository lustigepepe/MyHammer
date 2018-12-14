import { TestBed, ComponentFixture, async, tick } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { Job, JsonClass } from './json.data';

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

  it('should receive all jobs', async(() => {
    expect(comp.job).toBeTruthy();
  }));

  it('should set up detail data', async(() => {
    // I need that data only one time 
    // that's why I define it in that test 
    let aComSpy = fixture.debugElement.injector.get(AppComponent) as AppComponent;
    let job = new Job();
    // job.city = 'Berlin';
    // job.created_at = '';
    // job.description = 'uuUU';
    // job.end_date = '';
    job.title = 'JoobTest';
    aComSpy.selectJob(job);
  
    expect(aComSpy.title).toBe('JoobTest');
  }));

});
