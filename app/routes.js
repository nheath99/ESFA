const express = require('express')
const router = express.Router()

// Start Dummy Data
const dummy_employer_1 = {
  id: "XJBMNV",
  name: "Nice Employer"
}

const dummy_employer_2 = {
  id: "PPJTRA",
  name: "Good Employer"
}

const dummy_apprentice_1 = {
  id: 1,
  name: "Amy Russell",
  status: "Live",
  training_provider: "BARNFIELD COLLEGE",
  cohort_reference: "MK7JNM",
  unique_learner_number: "29475823",
  dob: "9 Sep 1990",
  apprenticeship_training_course: "Electrician, Level: 2",
  training_start_date: "Sep 2017",
  training_end_date: "Sep 2018",
  total_cost_of_training: "3,580",
  reference: "RUSSA",
  end_point_assessor: "The end point assessor has not been declared"
}

const dummy_apprentice_2 = {
  id: 2,
  name: "Cedric Daniels ",
  status: "Live",
  training_provider: "BARNFIELD COLLEGE",
  cohort_reference: "VL4WGV",
  unique_learner_number: "22554923",
  dob: "21 Oct 1990",
  apprenticeship_training_course: "Accounting, Level: 2",
  training_start_date: "Sep 2017",
  training_end_date: "Sep 2018",
  total_cost_of_training: "4,120",
  reference: "DANIC",
  end_point_assessor: "The end point assessor has not been declared"
}

const dummy_apprentice_3 = {
  id: 3,
  name: "Rhonda Pearlman",
  status: "Live",
  training_provider: "BARNFIELD COLLEGE",
  cohort_reference: "MDDL9M",
  unique_learner_number: "24948859",
  dob: "15 Jan 1991",
  apprenticeship_training_course: "Electrician, Level: 2",
  training_start_date: "Sep 2017",
  training_end_date: "Sep 2018",
  total_cost_of_training: "4,990",
  reference: "PEARR",
  end_point_assessor: "The end point assessor has not been declared"
}

const dummy_apprentice_4 = {
  id: 4,
  name: "Ellis Carver",
  status: "Live",
  training_provider: "BARNFIELD COLLEGE",
  cohort_reference: "VJJRJV",
  unique_learner_number: "49965724",
  dob: "29 Aug 1991",
  apprenticeship_training_course: "Electrician, Level: 2",
  training_start_date: "Sep 2017",
  training_end_date: "Sep 2018",
  total_cost_of_training: "3,580",
  reference: "CARVE",
  end_point_assessor: "The end point assessor has not been declared"
}

const dummy_apprentice_5 = {
  id: 5,
  name: "James McNulty ",
  status: "Stopped",
  stopped_date: "19 Dec 2017",
  training_provider: "BARNFIELD COLLEGE",
  cohort_reference: "VWDPWM",
  unique_learner_number: "33390119",
  dob: "21 May 1991",
  apprenticeship_training_course: "Electrician, Level: 2",
  training_start_date: "Sep 2017",
  training_end_date: "Sep 2018",
  total_cost_of_training: "3,430",
  reference: "MCNUJ",
  end_point_assessor: "The end point assessor has not been declared"
}

const dummy_training_provider_1 = {
  name: "NCG"
}

const dummy_training_provider_2 = {
  name: "BARNFIELD COLLEGE"
}

const dummy_cohort_1 = {
  training_provider: dummy_training_provider_1,
  reference: 'MK7JNM',
  draft: false,
  apprentices: [dummy_apprentice_1]
}

const dummy_cohort_2 = {
  training_provider: dummy_training_provider_1,
  reference: 'VL4WGV',
  draft: true,
  apprentices: [dummy_apprentice_2]
}

const dummy_cohort_3 = {
  training_provider: dummy_training_provider_2,
  reference: 'MDDL9M',
  draft: false,
  apprentices: [dummy_apprentice_3]
}

const dummy_cohort_4 = {
  training_provider: dummy_training_provider_2,
  reference: 'VJJRJV',
  draft: true,
  apprentices: [dummy_apprentice_4]
}

const dummy_cohort_5 = {
  training_provider: dummy_training_provider_2,
  reference: 'VWDPWM',
  draft: false,
  apprentices: [dummy_apprentice_5]
}

router.use(function (req, res, next) {
  if (!req.session.cohorts) {
    console.log("Adding cohorts to session");
    req.session.cohorts = [dummy_cohort_1, dummy_cohort_2, dummy_cohort_3, dummy_cohort_4, dummy_cohort_5];
  }
  if (!req.session.employers) {
    console.log("Adding employers to session");
    req.session.employers = [dummy_employer_1, dummy_employer_2];
  }
  if (!req.session.apprentices) {
    console.log("Adding apprentices to session");
    req.session.apprentices = [dummy_apprentice_1, dummy_apprentice_2, dummy_apprentice_3, dummy_apprentice_4, dummy_apprentice_5];
  }
  next();
})

// End dummy data

// Route index page
router.get('/', function (req, res) {
  res.render('index')
});

// Add your routes here - above the module.exports line

router.post('/sign-in', function (req, res) {
  res.redirect('accounts');
});

router.param('employer', function (req, res, next, employer) {
  var employers = req.session.employers.filter(e => e.id == employer);
  if (employers.length == 1) {
    res.locals.employer = employers[0];
  }
  next();
});

router.param('apprentice', function (req, res, next, apprentice) {
  var apprentices = req.session.apprentices.filter(a => a.id == apprentice);
  if (apprentices.length == 1) {
    res.locals.apprentice = apprentices[0];
  }
  next();
});

router.param('cohort', function (req, res, next, cohort) {
  var cohorts = req.session.cohorts.filter(c => c.reference == cohort);
  if (cohorts.length == 1) {
    let cohort = cohorts[0];
    cohort.apprentices = req.session.apprentices.filter(a => a.cohort_reference == cohort.reference);
    res.locals.cohort = cohort;
  }
  next();
});

// Employer
router.get('/accounts/:employer', function (req, res) {
  res.render('accounts/employer/index');
})

// Apprentices
router.get('/accounts/:employer/apprentices', function (req, res) {
  res.render('accounts/employer/apprentices/index');
})

router.get('/accounts/:employer/apprentices/manage', function (req, res) {
  res.locals.apprentices = req.session.apprentices;
  res.render('accounts/employer/apprentices/manage');
})

router.get('/accounts/:employer/apprentices/manage/:apprentice', function (req, res) {
  res.locals.qs = 'name=' + res.locals.apprentice.name;
  res.locals.qs += '&status=' + res.locals.apprentice.status;
  res.locals.qs += '&training_provider=' + res.locals.apprentice.training_provider;
  res.locals.qs += '&cohort_reference=' + res.locals.apprentice.cohort_reference;
  res.locals.qs += '&unique_learner_number=' + res.locals.apprentice.unique_learner_number;
  res.locals.qs += '&dob=' + res.locals.apprentice.dob;
  res.locals.qs += '&apprenticeship_training_course=' + res.locals.apprentice.apprenticeship_training_course;
  res.locals.qs += '&training_start_date=' + res.locals.apprentice.training_start_date;
  res.locals.qs += '&training_end_date=' + res.locals.apprentice.training_end_date;
  res.locals.qs += '&total_cost_of_training=' + res.locals.apprentice.total_cost_of_training;
  res.locals.qs += '&reference=' + res.locals.apprentice.reference;
  res.render('accounts/employer/apprentices/apprentice');
})

// Finance
router.get('/accounts/:employer/finance', function (req, res) {
  res.render('accounts/employer/finance/index');
})

router.get('/accounts/:employer/finance/transactions', function (req, res) {
  res.render('accounts/employer/finance/transactions');
})

// Add Apprentice Cohort
router.get('/accounts/:employer/apprentices/add', function (req, res) {
  res.render('accounts/employer/apprentices/add/index');
})

router.get('/accounts/:employer/apprentices/add/choose-organisation', function (req, res) {
  res.render('accounts/employer/apprentices/add/choose-organisation');
})

router.post('/accounts/:employer/apprentices/add/choose-organisation', function (req, res) {
  let employerId = res.locals.employer.id;
  res.redirect('/accounts/' + employerId + '/apprentices/add/training-provider');
})

router.get('/accounts/:employer/apprentices/add/training-provider', function (req, res) {
  res.render('accounts/employer/apprentices/add/training-provider');
})

router.post('/accounts/:employer/apprentices/add/training-provider', function (req, res) {
  let employerId = res.locals.employer.id;
  res.redirect('/accounts/' + employerId + '/apprentices/add/confirm-training-provider');
})

router.get('/accounts/:employer/apprentices/add/confirm-training-provider', function (req, res) {
  res.render('accounts/employer/apprentices/add/confirm-training-provider');
})

router.post('/accounts/:employer/apprentices/add/confirm-training-provider', function (req, res) {
  var confirmed = req.body.confirmation;
  let employerId = res.locals.employer.id;

  if (confirmed === 'false') {
    // Redirect back to the training provider selector
    res.redirect('/accounts/' + employerId + '/apprentices/add/training-provider');
  } else {
    // continue
    res.redirect('/accounts/' + employerId + '/apprentices/add/start-adding-apprentices');
  }
})

router.get('/accounts/:employer/apprentices/add/start-adding-apprentices', function (req, res) {
  res.render('accounts/employer/apprentices/add/start-adding-apprentices');
})

router.post('/accounts/:employer/apprentices/add/start-adding-apprentices', function (req, res) {
  var willAdd = req.body.addApprentices;
  if (willAdd === 'false') {
    res.redirect('message-for-training-provider');
  }
  else {
    const min = 10000;
    const max = 99999;
    let cohort_reference = 'V' + Math.floor(Math.random() * (max - min + 1)) + min;
  
    let cohort = {
      training_provider: dummy_training_provider_1,
      reference: cohort_reference,
      draft: true,
      apprentices: [],
      message: ''
    };
  
    // add the cohort to session list
    req.session.cohorts.push(cohort);
    let employerId = res.locals.employer.id;
    res.redirect('/accounts/' + employerId + '/apprentices/cohorts/' + cohort_reference);
  }
})

router.get('/accounts/:employer/apprentices/add/message-for-training-provider', function (req, res) {
  res.render('accounts/employer/apprentices/add/message-for-training-provider');
})

router.post('/accounts/:employer/apprentices/add/message-for-training-provider', function (req, res) {
  let employerId = res.locals.employer.id;  
  console.log(res.locals.data);

  let providerMessage = res.locals.data["provider-message"];

  const min = 10000;
  const max = 99999;
  let cohort_reference = 'V' + Math.floor(Math.random() * (max - min + 1)) + min;

  let cohort = {
    training_provider: dummy_training_provider_1,
    reference: cohort_reference,
    draft: true,
    apprentices: [],
    message: providerMessage
  };

  // add the cohort to session list
  req.session.cohorts.push(cohort);

  res.redirect('/accounts/' + employerId + '/apprentices/cohorts/' + cohort_reference);
})

router.get('/accounts/:employer/apprentices/add/complete', function (req, res) {
  res.render('accounts/employer/apprentices/add/complete');
})

router.get('/accounts/:employer/apprentices/cohorts', function (req, res) {
  res.locals.draft_count = req.session.cohorts.filter(c => c.draft == true).length;
  res.locals.providers_count = req.session.cohorts.filter(c => c.draft == false).length;

  res.render('accounts/employer/apprentices/cohorts/index');
})

router.get('/accounts/:employer/apprentices/cohorts/provider', function (req, res) {
  res.locals.view = "provider";
  res.locals.cohorts = req.session.cohorts.filter(c => c.draft == false);
  res.render('accounts/employer/apprentices/cohorts/list');
})

router.get('/accounts/:employer/apprentices/cohorts/draft', function (req, res) {
  res.locals.view = "draft";
  res.locals.cohorts = req.session.cohorts.filter(c => c.draft == true);
  res.render('accounts/employer/apprentices/cohorts/list');
})

router.get('/accounts/:employer/apprentices/cohorts/:cohort', function (req, res) {
  res.render('accounts/employer/apprentices/cohorts/details');
})

router.get('/accounts/:employer/apprentices/cohorts/:cohort/finished', function (req, res) {
  res.render('accounts/employer/apprentices/cohorts/finished');
})

router.post('/accounts/:employer/apprentices/cohorts/:cohort/finished', function (req, res) {
  let employerId = res.locals.employer.id;
  let cohort = res.locals.cohort;

  var option = req.body.option;
  if (option == 'approve') {
    res.redirect('/accounts/' + employerId + '/apprentices/cohorts/' + cohort.reference + '/message-for-training-provider');
  }
  else if (option == 'send') {
    res.redirect('/accounts/' + employerId + '/apprentices/cohorts/' + cohort.reference + '/message-for-training-provider');
  }
  else if (option == 'save') {
    res.redirect('/accounts/' + employerId + '/apprentices/cohorts');
  }
  else {
    res.render('accounts/employer/apprentices/cohorts/finished');
  }
})

router.get('/accounts/:employer/apprentices/cohorts/:cohort/message-for-training-provider', function (req, res) {
  res.render('accounts/employer/apprentices/cohorts/message-for-training-provider');
})

router.post('/accounts/:employer/apprentices/cohorts/:cohort/message-for-training-provider', function (req, res) {

  let message = req.body.message;

  // add the message to the cohort
  res.locals.cohort.message = message;

  // update the status
  res.locals.cohort.draft = false;

  let employerId = res.locals.employer.id;
  let cohort = res.locals.cohort;
  res.redirect('/accounts/' + employerId + '/apprentices/cohorts/' + cohort.reference + '/complete');
})

router.get('/accounts/:employer/apprentices/cohorts/:cohort/complete', function (req, res) {
  res.render('accounts/employer/apprentices/cohorts/complete');
})

router.get('/accounts/:employer/apprentices/cohorts/:cohort/add-apprentice', function (req, res) {
  res.render('accounts/employer/apprentices/cohorts/add-apprentice');
})

// Add Apprentice to Cohort
router.post('/accounts/:employer/apprentices/cohorts/:cohort/add-apprentice', function (req, res) {
  // adds the apprentice to the cohort and redirects to the cohort details page

  let employerId = res.locals.employer.id;
  let cohort = res.locals.cohort;

  let data = req.session.data;

  let ids = req.session.apprentices.map(a => a.id);
  let max_id = ids.reduce(function (a, b) {
    return Math.max(a, b);
  });
  let newId = max_id + 1;

  const min = 10000000;
  const max = 99999999;
  let uln = Math.floor(Math.random() * (max - min + 1)) + min;

  let apprentice = {
    id: newId,
    name: data["FirstName"] + ' ' + data["LastName"],
    status: "Live",
    training_provider: cohort.training_provider.name,
    cohort_reference: cohort.reference,
    unique_learner_number: uln,
    dob: data["dob-day"] + ' ' + data["dob-month"] + ' ' + data["dob-year"],
    apprenticeship_training_course: data["training_course"],
    training_start_date: data["start-month"] + ' ' + data["start-year"],
    training_end_date: data["finish-month"] + ' ' + data["finish-month"],
    total_cost_of_training: data["price"],
    reference: data["reference"],
    end_point_assessor: "The end point assessor has not been declared"
  };

  req.session.apprentices.push(apprentice); // add the newly-created apprentice to the session list

  res.redirect('/accounts/' + employerId + '/apprentices/cohorts/' + cohort.reference)
})

module.exports = router
