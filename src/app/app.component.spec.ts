import { TestBed, ComponentFixture, async, tick } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { Job, JsonClass } from './json.data';
import { DataPromiseService } from './services/data.promis.service';

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
      ], providers: [DataPromiseService]
    }).compileComponents();
  }));

  it('should create the component', async(() => {
    fixture = TestBed.createComponent(AppComponent);
    comp = fixture.debugElement.componentInstance;
    expect(comp).toBeTruthy();
  }));

  // that time I'm  avoid to create a 
  // separate spec file for the json service
  it('should resolve all json data from json file', async () => {
    const hds = fixture.debugElement.injector.get(DataPromiseService);
    const handleErrorSpy = spyOn(hds, 'handleError').and.callThrough();
    const promise = hds.getJsonData();

    expect(promise).not.toBe(null);
    expect(handleErrorSpy).not.toHaveBeenCalled();
  });

  it('should receive all jobs', async(() => {
    expect(comp.job).toBeTruthy();
  }));

  it('should set up detail data', async(() => {
    // I need that data only one time 
    // that's why I define it in that test 
    let aComSpy = fixture.debugElement.injector.get(AppComponent) as AppComponent;
    let job = new Job();
    job.created_at = '';
    job.description = 'uuUU';
    job.end_date = '';
    job.title = 'JobTest';
    aComSpy.selectJob(job);

    expect(aComSpy.created_at).toBe('');
    expect(aComSpy.description).toBe('description: uuUU');
    expect(aComSpy.end_date).toBe('');
    expect(aComSpy.title).toBe('JobTest');
  }));

});
